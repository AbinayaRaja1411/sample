import { UserBasicInfo } from './user-basic-info';
import { Gender } from './gender.enum';

export class User extends UserBasicInfo {
    private gender: Gender;
    private address: string;
}
