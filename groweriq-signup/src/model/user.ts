import { UserBasicInfo } from './user-basic-info';
import { Gender } from './gender.enum';
import { Address } from './address';

export class User extends UserBasicInfo {
    private gender: Gender;
    private address: Address;
}
