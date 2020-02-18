import React, {ReactNode} from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import LoadList, {LoadListProps} from "../common/LoadList";
import Subscription, {SubscriptionProps} from "./Subscription";

export interface SubscriptionsProps {
    onLoad: LoadListProps['onLoad'];
    onLoadMore?: LoadListProps['onLoad'];
}

interface CollapsedItemsProps {
   renderItem:  (item: SubscriptionProps) => ReactNode;
   onLoad: LoadListProps['onLoad'];
}

const CollapsedItems: React.FC<CollapsedItemsProps> = ({ renderItem, onLoad }) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const triggerListItem = (
        <ListItem button dense onClick={toggle}>
            <ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={open ? 'Скрыть' : `Показать ещё`} />
        </ListItem>
    );

    const collapse = (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <LoadList
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
};

const Subscriptions: React.FC<SubscriptionsProps> = ({ onLoad, onLoadMore }) => {

    const renderItem = (item: SubscriptionProps) => (
        <Subscription {...item} />
    );

    const collapsedItems = onLoadMore ? (
        <CollapsedItems
            renderItem={renderItem}
            onLoad={onLoadMore}
        />
    ) : null;

    return (
        <List>
            <LoadList
                renderLoadMore={null}
                renderItem={renderItem}
                onLoad={onLoad}
            />
            {collapsedItems}
        </List>
    );
};

export default Subscriptions;
