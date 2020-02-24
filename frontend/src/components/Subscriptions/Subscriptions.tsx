import React, {ReactNode} from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Items, {ItemsProps} from "../common/Items";
import Subscription from "./Subscription";
import {SubscriptionModel} from "../../models/SubscriptionModel";
import {CHANNEL_PAGE_ROUTE} from "../../pages/ChannelPage";

export interface SubscriptionsProps {
    onLoad: ItemsProps['onLoad'];
    onLoadMore?: ItemsProps['onLoad'];
}

interface CollapsedItemsProps {
   renderItem:  (item: SubscriptionModel) => ReactNode;
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
    const renderItem = (item: SubscriptionModel) => (
        <Subscription
            key={item.id}
            title={item.title}
            to={CHANNEL_PAGE_ROUTE.replace(':id', item.id)}
            avatarSrc={item.avatarUrl}
        />
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
