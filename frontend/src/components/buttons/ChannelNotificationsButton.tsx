import React, {useState} from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PopoverButton, {PopoverButtonProps} from "./PopoverButton";
import Menu from "../common/Menu";
import {MenuListItemProps} from "../common/MenuListItem";

export interface ChannelNotificationsButtonProps {
    className: PopoverButtonProps['className'];
}

function ChannelNotificationsButton(props: ChannelNotificationsButtonProps) {
    const [index, setIndex] = useState(1);

    const addItemHandler = (item: MenuListItemProps, idx: number) => ({
        ...item,
        selected: index === idx,
        onClick: () => setIndex(idx)
    });

    const items: MenuListItemProps[] = [
        { title: 'Все', icon: <NotificationsActiveIcon /> },
        { title: 'На основе предпочтений', icon: <NotificationsIcon /> },
        { title: 'Никакие', icon: <NotificationsOffIcon /> },
    ].map(addItemHandler);

    const menu = (
        <Menu
            items={items}
        />
    );

    return (
        <PopoverButton
            {...props}
            content={menu}
        >
            {items[index].icon}
        </PopoverButton>
    )
};

export default ChannelNotificationsButton;
