import React, {useState} from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PopoverButton, {PopoverButtonProps} from "./PopoverButton";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import {List} from "@material-ui/core";

export interface NotificationsToggleButtonProps {
    className: PopoverButtonProps['className'];
}

function NotificationsToggleButton(props: NotificationsToggleButtonProps) {
    const [value, setValue] = useState(1);
    let items: MenuListItemProps[] = [
        { title: 'All', icon: <NotificationsActiveIcon /> },
        { title: 'Personalized', icon: <NotificationsIcon /> },
        { title: 'None', icon: <NotificationsOffIcon /> },
    ];

    const renderItem = (closePopover: VoidFunction) => (item: MenuListItemProps, index: number) => (
        <MenuListItem
            title={item.title}
            icon={item.icon}
            selected={index === value}
            onClick={() => {
                setValue(index);
                closePopover();
            }}
        />
    );

    const renderContent: PopoverButtonProps['renderContent'] = closePopover => (
        <List>
            {items.map(renderItem(closePopover))}
        </List>
    )

    return (
        <PopoverButton
            {...props}
            renderContent={renderContent}
        >
            {items[value].icon}
        </PopoverButton>
    )
}

export default NotificationsToggleButton;
