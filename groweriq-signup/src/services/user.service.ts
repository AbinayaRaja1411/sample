import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBasicInfo } from 'src/model/user-basic-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUsersUrl: string;
  constructor(private configService: ConfigurationService, private http: HttpClient) {
    this.apiUsersUrl = this.configService.apiBaseUrl + 'users';
   }

  getUsers(): Observable<UserBasicInfo[]> {
    return this.http.get<UserBasicInfo[]>(this.apiUsersUrl);
  }
}
