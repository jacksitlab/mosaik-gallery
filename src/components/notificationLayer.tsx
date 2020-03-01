import * as React from 'react';
import notificationStore from 'stores/notificationStore';
import { INotification } from 'models/notification';

interface INotificationState {
    notifications: INotification[];
}

class NotificationLayer extends React.Component<any, INotificationState>{


    constructor(props: any) {
        super(props);
        this.state = {
            notifications: []
        }
        this.onNotificationStackChanged = this.onNotificationStackChanged.bind(this);
        notificationStore.on("change", this.onNotificationStackChanged);
    }

    componentWillUnmount() {
        notificationStore.removeListener("change", this.onNotificationStackChanged);
    }
    private onNotificationStackChanged() {
        this.setState({ notifications: notificationStore.getData() })
    }
    render() {
        let i = 0;
        return <div className="notificationWrapper">
            {this.state.notifications.map(n => {
                return <div key={i++} className={`notification alert alert-${n.type.toString().toLowerCase()}`}>
                    {n.message}
                </div>
            })}
        </div>
    }
}
export default NotificationLayer;
