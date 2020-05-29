import { User } from './user';

export class Grower extends User {
    private batcheshandled: number;
    private yieldAcquired: number;
    private greenhouseLocations: string[];
}
