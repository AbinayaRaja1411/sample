import { UserBasicInfo } from './user-basic-info';

export class CreateUserServiceResponse {
    createdUser?: UserBasicInfo;
    errorMessage?: string;
}
