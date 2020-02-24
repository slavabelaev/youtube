import React from "react";
import {List} from "@material-ui/core";
import Items, {ItemsProps} from "../common/Items";
import Notification from "./Notification";
import {NotificationModel} from "../../models/NotificationModel";
import {WATCH_PAGE_ROUTE} from "../../pages/WatchPage";

export interface NotificationsProps {
    onLoad: ItemsProps['onLoad']
}

function Notifications({ onLoad }: NotificationsProps) {
    const renderItem = (item: NotificationModel) => (
        <Notification
            key={item.id}
            avatarSrc={item.avatarUrl}
            imageSrc={item.imageUrl}
            text={item.text}
            createdAt={item.createdAt}
            linkTo={`${WATCH_PAGE_ROUTE}?v=${item.id}`}
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
