import React, {ReactNode} from "react";
import {AvatarProps, createStyles, List, Theme} from "@material-ui/core";
import RouteListItem from "../RouteListItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../LoadList";

export interface SubscriptionProps {
    id: string;
    title: string;
    linkTo: string;
    avatarUrl: AvatarProps['src'];
}

export interface SubscriptionsProps {
    onLoad: LoadListProps['onLoad'];
    onLoadMore?: LoadListProps['onLoad'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

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
    const classes = useStyles();

    const renderAvatar = (avatarUrl: SubscriptionProps['avatarUrl']) => (
        <Avatar
            src={avatarUrl}
            className={classes.avatar}
        />
    );

    const renderItem = (item: SubscriptionProps) => (
        <RouteListItem
            key={item.id}
            title={item.title}
            to={item.linkTo}
            icon={() => renderAvatar(item.avatarUrl)}
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
