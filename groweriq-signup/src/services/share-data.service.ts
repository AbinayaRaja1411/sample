import { Injectable } from '@angular/core';
import { CreateUserServiceResponse } from 'src/model/create-user-service-response';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private _createUserServiceResponse: CreateUserServiceResponse;
  public get createUserServiceResponse(): CreateUserServiceResponse {
    return this._createUserServiceResponse;
  }
  public set createUserServiceResponse(value: CreateUserServiceResponse) {
    this._createUserServiceResponse = value;
  }

}
