import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "./RouteListItem";
import {MenuItem} from "./MenuListItem";

export interface MenuProps {
    items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    const renderItem = (item: MenuItem) => (
        <RouteListItem {...item} key={item.to} />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
};

export default Menu;
