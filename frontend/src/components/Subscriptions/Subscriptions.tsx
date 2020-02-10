import React from "react";
import {createStyles, List, Theme} from "@material-ui/core";
import RouteListItem from "../RouteListItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

export interface SubscriptionProps {
    id: string;
    title: string;
    linkTo: string;
    imageUrl: string;
}

export interface SubscriptionsProps {
    items: SubscriptionProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

const Subscriptions: React.FC<SubscriptionsProps> = ({ items }) => {
    const classes = useStyles();
    const displayItems = items.slice(0, 7);
    const toggleItems = items.slice(7);
    const toggleCount = toggleItems.length;
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const renderAvatar = (imageUrl: string) => (
        <Avatar
            src={imageUrl}
            className={classes.avatar}
        />
    );

    const renderItem = (item: SubscriptionProps) => (
        <RouteListItem
            key={item.id}
            title={item.title}
            to={item.linkTo}
            icon={() => renderAvatar(item.imageUrl)}
        />
    );

    const triggerListItem = (
        <ListItem button dense onClick={toggle}>
            <ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={open ? 'Скрыть' : `Показать ещё ${toggleCount}`} />
        </ListItem>
    );

    const collapse = (
        <Collapse in={open} timeout="auto" unmountOnExit>
            {toggleItems.map(renderItem)}
        </Collapse>
    );

    return (
        <List>
            {displayItems.map(renderItem)}
            {toggleCount ? collapse : null}
            {toggleCount ? triggerListItem : null}
        </List>
    );
};

export default Subscriptions;
