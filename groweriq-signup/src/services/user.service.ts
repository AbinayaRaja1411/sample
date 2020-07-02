import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { UserBasicInfo } from 'src/model/user-basic-info';
import { ShareDataService } from './share-data.service';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUsersUrl: string;
  constructor(private configService: ConfigurationService,
              private http: HttpClient,
              private shareDataService: ShareDataService) {
    this.apiUsersUrl = this.configService.apiBaseUrl + 'users';
   }

  getUsers(): Observable<UserBasicInfo[]> {
    return this.http.get<UserBasicInfo[]>(this.apiUsersUrl);
  }

  createUser(userInfo: UserBasicInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.shareDataService.createUserServiceResponse = { createdUser: userInfo };
    return this.http.post<UserBasicInfo>(this.apiUsersUrl, userInfo, httpOptions)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.message;
    } else {
      errorMsg = `Server error: ${error.status} ${error.error}`;
    }
    this.shareDataService.createUserServiceResponse = { errorMessage: errorMsg };
    return throwError({ error: true, message: errorMsg });
  }
}
