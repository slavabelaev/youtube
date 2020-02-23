import React, {ReactNode} from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Items, {ItemsProps} from "../common/Items";
import Subscription, {SubscriptionProps} from "./Subscription";

export interface SubscriptionsProps {
    onLoad: ItemsProps['onLoad'];
    onLoadMore?: ItemsProps['onLoad'];
}

interface CollapsedItemsProps {
   renderItem:  (item: SubscriptionProps) => ReactNode;
   onLoad: ItemsProps['onLoad'];
}

function CollapsedItems({ renderItem, onLoad }: CollapsedItemsProps) {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const triggerListItem = (
        <ListItem button dense onClick={toggle}>
            <ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={open ? 'Show less' : 'Show more'} />
        </ListItem>
    );

    const collapse = (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Items
                renderLoadMore={null}
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </Collapse>
    );

    return (
        <>
            {collapse}
            {triggerListItem}
        </>
    )
}

function Subscriptions({ onLoad, onLoadMore }: SubscriptionsProps) {

    const renderItem = (item: SubscriptionProps) => (
        <Subscription {...item} key={item.id} />
    );

    const collapsedItems = onLoadMore ? (
        <CollapsedItems
            renderItem={renderItem}
            onLoad={onLoadMore}
        />
    ) : null;

    return (
        <List>
            <Items
                renderLoadMore={null}
                renderItem={renderItem}
                onLoad={onLoad}
            />
            {collapsedItems}
        </List>
    );
}

export default Subscriptions;
