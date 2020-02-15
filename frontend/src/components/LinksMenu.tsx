import React from "react";
import {List} from "@material-ui/core";
import LinkListItem from "./LinkListItem";
import {RouteLink} from "./LinkListItem";

export interface LinksMenuProps {
    items: RouteLink[];
}

const LinksMenu: React.FC<LinksMenuProps> = ({ items }) => {
    const renderItem = (item: RouteLink) => (
        <LinkListItem {...item} key={item.to} />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
};

export default LinksMenu;
