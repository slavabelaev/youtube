import {makeStyles} from "@material-ui/core/styles";
import {createStyles, DrawerProps, Theme, Typography} from "@material-ui/core";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {Link, NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import RouteItem from "../../../interfaces/RouteItem";
import {
    GUIDE_PRIMARY_ROUTES, GUIDE_SECONDARY_ROUTES, MAIN_ROUTES,
    OPTIONS_ROUTES,
    OTHER_FEATURES_ROUTES,
    PLAYLISTS_ROUTES,
    PRIMARY_ROUTES,
    SECONDARY_ROUTES,
    SUBSCRIPTIONS_ROUTES
} from "../../../constants/routes";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        top: 64,
        bottom: 0,
        left: 0,
        zIndex: theme.zIndex.appBar - 1,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            top: 56
        },
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: 0
        },
        '&:hover::-webkit-scrollbar': {
            width: theme.spacing(1)
        },
        '&:hover::-webkit-scrollbar-track': {
        },
        '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.grey.A100
        }
    },
    toolbar: {
        ...theme.mixins.toolbar
    },
    link: {
        display: 'inline-block',
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: theme.spacing(1),
        '&:visited': {
            color: theme.palette.text.secondary
        }
    },
    links: {
        padding: theme.spacing(3),
        '&+section': {
            paddingTop: 0
        }
    },
    heading: {
        display: 'block',
        padding: theme.spacing(1, 3, 0, 3)
    },
    listItemAvatar: {
        marginLeft: theme.spacing(1),
        minWidth: theme.spacing(6)
    },
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    listItemIcon: {
        marginLeft: theme.spacing(1),
        minWidth: theme.spacing(6)
    },
    verticalListItem: {
        flexDirection: 'column'
    },
    verticalListItemIcon: {
        minWidth: 'initial'
    },
    verticalListItemCaption: {
        fontSize: 10,
        whiteSpace: 'nowrap'
    },
    bottomNavigation: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar
    }
}));

export interface LayoutDrawerProps extends DrawerProps {}

const LayoutDrawer: React.FC<LayoutDrawerProps> = ({ open, onClose }) => {
    const classes = useStyles();
    const [collapsed, setCollapsed] = React.useState(true);
    const [subscriptionsCollapsed, setSubscriptionsCollapsed] = React.useState(true);
    const toggleCollapse = () => setCollapsed(!collapsed);
    const toggleSubscriptions = () => setSubscriptionsCollapsed(!subscriptionsCollapsed);
    const drawerWidth = open ? 240 : 72;
    const styles = { width: drawerWidth };

    const renderListItem = (item: RouteItem) => {
        const Icon = item.icon;
        return (
            <ListItem button dense component={NavLink} to={item.to} exact activeClassName="Mui-selected">
                <ListItemIcon className={classes.listItemIcon}>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
        )
    };

    const renderList = (items: RouteItem[]) => (
        <List>
            {items.map(renderListItem)}
        </List>
    );

    const renderPlaylists = (items: RouteItem[]) => (
        <>
            <List>
                <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                    {renderList(items)}
                </Collapse>
                <ListItem button dense onClick={toggleCollapse}>
                    <ListItemIcon className={classes.listItemIcon}>
                        {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Развернуть" />
                </ListItem>
            </List>
        </>
    );

    const renderSubscriptionsItem = (item: RouteItem) => (
        <ListItem button dense component={NavLink} to={item.to} activeClassName="Mui-selected">
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText primary={item.title} />
        </ListItem>
    );

    const renderSubscriptions = (items: RouteItem[]) => {
        const displayedItems: RouteItem[] = items.slice(0, 7);
        const otherItems: RouteItem[] = items.slice(7);
        return (
            <List>
                {displayedItems.map(renderSubscriptionsItem)}
                <Collapse in={!subscriptionsCollapsed} timeout="auto" unmountOnExit>
                    {otherItems.map(renderSubscriptionsItem)}
                </Collapse>
                <ListItem button dense onClick={toggleSubscriptions}>
                    <ListItemIcon className={classes.listItemIcon}>
                        {subscriptionsCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </ListItemIcon>
                    <ListItemText primary={`Показать ещё ${otherItems.length}`} />
                </ListItem>
            </List>
        )
    };

    const renderLinks = (items: RouteItem[]) => (
        <section className={classes.links}>
            {items.map(item =>
                <Typography
                    variant="subtitle2"
                    component={Link}
                    to={item.to}
                    className={classes.link}
                >
                    {item.title}
                </Typography>
            )}
        </section>
    );

    const content = (
        <div className={classes.root} style={styles}>
            <section>
                {renderList(PRIMARY_ROUTES)}
            </section>
            <Divider />
            <section>
                {renderList(SECONDARY_ROUTES)}
                {renderPlaylists(PLAYLISTS_ROUTES)}
            </section>
            <Divider />
            <section>
                <Typography
                    className={classes.heading}
                    variant="overline"
                >
                    Подписки
                </Typography>
                {renderSubscriptions(SUBSCRIPTIONS_ROUTES)}
            </section>
            <Divider />
            <section>
                <Typography
                    className={classes.heading}
                    variant="overline"
                >
                    Другие возможности
                </Typography>
                {renderList(OTHER_FEATURES_ROUTES)}
            </section>
            <Divider />
            <section>
                {renderList(OPTIONS_ROUTES)}
            </section>
            <Divider />
            {renderLinks(GUIDE_PRIMARY_ROUTES)}
            {renderLinks(GUIDE_SECONDARY_ROUTES)}
        </div>
    );

    const renderVerticalListItem = (item: RouteItem) => {
        const Icon = item.icon;
        return (
            <ListItem
                button
                className={classes.verticalListItem}
                component={NavLink}
                to={item.to}
                activeClassName="Mui-selected"
            >
                <ListItemIcon className={classes.verticalListItemIcon}>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography
                        className={classes.verticalListItemCaption}
                        variant="caption"
                    >
                        {item.title}
                    </Typography>
                }
                />
            </ListItem>
        )
    };

    const verticalList = (
        <div className={classes.root} style={styles}>
            <List>
                {MAIN_ROUTES.map(renderVerticalListItem)}
            </List>
        </div>
    );

    return (
        <>
            {open ? content : verticalList}
            <div style={styles} />
        </>
    );
};

export default LayoutDrawer;
