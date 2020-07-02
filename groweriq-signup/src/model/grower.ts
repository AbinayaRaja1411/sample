import { User } from './user';

export class Grower extends User {
    private batches_handled: number;
    private yield_acquired: number;
    private greenhouse_locations: string[];
}
