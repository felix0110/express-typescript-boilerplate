import { EventSubscriber, On } from 'event-dispatch';
import { User } from '../models/User';
import { events } from './events';
import { Log } from '../../core/Log';
const log = new Log(__filename);


@EventSubscriber()
export class UserEventSubscriber {

    @On(events.user.created)
    public onUserCreate(user: User): void {
        log.info('User ' + user.toString() + ' created!');
    }

}
