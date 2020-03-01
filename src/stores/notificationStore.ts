import EventEmiiter from 'events';
import { IAction } from '../flux/actions';
import dispatcher from '../flux/dispatcher';
import { INotification } from 'models/notification';
import NotificationActions from 'actions/notificationActions';
class NotificationStore extends EventEmiiter {

    private data: INotification[];
    private timeout: number;
    public constructor() {
        super();
        this.data = [];
        this.timeout = 4000;
    }
    private addData(module: INotification) {
        this.data = [module].concat(this.data);
        this.emit("change");
        setTimeout(() => {
            this.shift();
        }, this.timeout);
    }
    private shift() {
        this.data.pop();
        this.emit("change");
    }
    private clearData() {
        this.data = [];
        this.emit("change");
    }

    public getData(): INotification[] {
        return this.data;
    }
    public hasData(): boolean {
        return this.data.length > 0;
    }
    public handleAction(action: IAction) {
        switch (action.type) {
            case NotificationActions.ACTION_ADD:
                this.addData(action.data);
                break;
            case NotificationActions.ACTION_REMOVE:
                this.shift();
                break;
            case NotificationActions.ACTION_CLEAR:
                this.clearData();
                break;
        }
    }
}

const notificationStore = new NotificationStore();
dispatcher.register(notificationStore.handleAction.bind(notificationStore))
export default notificationStore;
