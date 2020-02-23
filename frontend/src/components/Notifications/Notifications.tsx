import React from "react";
import {List} from "@material-ui/core";
import Items, {ItemsProps} from "../common/Items";
import Notification, {NotificationProps} from "./Notification";

export interface NotificationsProps {
    onLoad: ItemsProps['onLoad']
}

function Notifications({ onLoad }: NotificationsProps) {
    const renderItem = (item: NotificationProps) => (
        <Notification
            {...item}
            key={item.id}
        />
    );

    return (
        <List>
          <Items
              renderItem={renderItem}
              onLoad={onLoad}
          />
        </List>
    );
}

export default Notifications;
