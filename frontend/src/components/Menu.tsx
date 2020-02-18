import React from "react";
import {List} from "@material-ui/core";
import MenuListItem, {MenuListItemProps} from "./MenuListItem";

export interface MenuProps {
    items: MenuListItemProps[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    const renderItem = (item: MenuListItemProps, index: number) => (
        <MenuListItem
            {...item}
            key={index}
        />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
};

export default Menu;
