import dispatcher from "flux/dispatcher";
import { NotificationType, INotification } from "models/notification";

class NotificationActions {
    public static readonly ACTION_ADD = "NOTIFICATION_ADD";
    public static readonly ACTION_REMOVE = "NOTIFICATION_REMOVE";
    public static readonly ACTION_CLEAR = "NOTIFICATION_CLEAR";

    public static createAddAction(message: string, type: NotificationType) {
        dispatcher.dispatch({
            type: NotificationActions.ACTION_ADD,
            data: { message: message, type: type } as INotification
        })
    }
    public static createClearAction() {
        dispatcher.dispatch({
            type: NotificationActions.ACTION_CLEAR,
            data: null
        })
    }
}
export default NotificationActions;
