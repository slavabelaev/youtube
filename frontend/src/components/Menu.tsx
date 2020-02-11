import React from "react";
import RouteItem from "../interfaces/RouteItem";
import {List} from "@material-ui/core";
import RouteListItem from "./RouteListItem";

export interface MenuProps {
    items: RouteItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    const renderItem = (item: RouteItem) => (
        <RouteListItem {...item} key={item.to} />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
};

export default Menu;
