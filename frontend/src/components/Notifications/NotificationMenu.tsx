import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Menu from "../common/Menu";

const NotificationMenu: React.FC = () => (
    <Menu
        items={[
            { title: 'Скрыть уведомление', icon: <VisibilityOffIcon /> },
            { title: 'Отключить все уведомления о канале', icon: <></> },
        ]}
    />
);

export default NotificationMenu;
