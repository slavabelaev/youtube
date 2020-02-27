import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Menu from "../../common/Menu";

function NotificationMenu() {
	return (
    <Menu
        items={[
            { title: 'Hide this notification', icon: <VisibilityOffIcon /> },
            { title: 'Turn off all from this channel' },
        ]}
    />
)
}

export default NotificationMenu;
