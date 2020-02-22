import React from "react";
import {List} from "@material-ui/core";
import LinkListItem from "./LinkListItem";
import {RouteLink} from "./LinkListItem";

export interface LinksMenuProps {
    items: RouteLink[];
}

function LinksMenu({ items }: LinksMenuProps) {
    const renderItem = (item: RouteLink) => (
        <LinkListItem {...item} key={item.to} />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
}

export default LinksMenu;
