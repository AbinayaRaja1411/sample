import { UserTypes } from './user-types.enum';

export class Address {
    constructor(private streetAddress: string,
                private city: string,
                private province: string,
                private country: string,
                private postalCode: string) {}
}
