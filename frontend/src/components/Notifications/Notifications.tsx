import React from "react";
import {List} from "@material-ui/core";
import LoadList, {LoadListProps} from "../common/LoadList";
import Notification, {NotificationProps} from "./Notification";

export interface NotificationsProps {
    onLoad: LoadListProps['onLoad']
}

const Notifications: React.FC<NotificationsProps> = ({ onLoad }) => {
    const renderItem = (item: NotificationProps) => (
        <Notification
            {...item}
            key={item.id}
        />
    );

    return (
      <List>
          <LoadList
              renderItem={renderItem}
              onLoad={onLoad}
          />
      </List>
    );
};

export default Notifications;
