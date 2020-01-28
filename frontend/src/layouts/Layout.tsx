import React, {ReactElement} from "react";
import {Link} from "react-router-dom";
import {AppBar, createStyles, IconButton, Theme, Toolbar, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import logo from "./logo.svg";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import HelpIcon from "@material-ui/icons/Help";
import RateReviewIcon from "@material-ui/icons/RateReview";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SettingsIcon from "@material-ui/icons/Settings";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const primaryMenu: MenuItem[] = [
    { title: 'Главная', to: '/', icon: <HomeIcon /> },
    { title: 'В тренде', to: '/feed/trending', icon: <WhatshotIcon /> },
    { title: 'Подписки', to: '/feed/subscriptions', icon: <SubscriptionsIcon /> },
];

const secondaryMenu: MenuItem[] = [
    { title: 'Библиотека', to: '/feed/library', icon: <VideoLibraryIcon /> },
    { title: 'История', to: '/feed/history', icon: <HistoryIcon /> },
    { title: 'Смотреть позже', to: '/playlist?list=WL', icon: <WatchLaterIcon /> },
    { title: 'Покупки', to: '/feed/purchases', icon: <LocalOfferIcon /> },
    { title: 'Понравившиеся', to: '/playlist?list=1', icon: <ThumbUpIcon /> },
];

const playlistsMenu: MenuItem[] = Array(10).fill(null).map((_, index) => (
    { title: `Плэйлист ${index}`, to: '/playlist?list=1', icon: <PlaylistPlayIcon /> }
));

const subscriptionsMenu: MenuItem[] = Array(10).fill(null).map((_, index) => (
    { title: `Название канала ${index}`, to: '/channel/1', icon: <></> }
));

const otherFeatures: MenuItem[] = [
    { title: 'Видеоигры', to: '/gaming', icon: <VideogameAssetIcon /> },
    { title: 'Трансляции', to: '/streaming', icon: <WifiTetheringIcon /> }
];

const optionsMenu: MenuItem[] = [
    { title: 'Настройки', to: '/settings', icon: <SettingsIcon /> },
    { title: 'Жалобы', to: '/reporthistory', icon: <FlagIcon /> },
    { title: 'Справка', to: '/help', icon: <HelpIcon /> },
    { title: 'Отправить отзыв', to: '/send-review', icon: <RateReviewIcon /> }
];

const guideLinksPrimary: MenuItem[] = [
    { title: 'О сервисе', to: '/', icon: <></> },
    { title: 'Прессе', to: '/', icon: <></> },
    { title: 'Правообладателям', to: '/', icon: <></> },
    { title: 'Связаться с нами', to: '/', icon: <></> },
    { title: 'Авторам', to: '/', icon: <></> },
    { title: 'Рекламодателям', to: '/', icon: <></> },
    { title: 'Разработчикам', to: '/', icon: <></> },
];

const guideLinksSecondary: MenuItem[] = [
    { title: 'Условия использования', to: '/', icon: <></> },
    { title: 'Конфиденциальность', to: '/', icon: <></> },
    { title: 'Правила и безопасность', to: '/', icon: <></> },
    { title: 'Новые функции', to: '/', icon: <></> },
];

const drawerWidth = 240;
const useDrawerStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        width: drawerWidth,
        top: 64,
        bottom: 0,
        left: 0,
        zIndex: theme.zIndex.appBar - 1,
        backgroundColor: theme.palette.background.paper,
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            top: 56
        },
        '&:hover': {
            overflow: 'auto',
        },
        '&::-webkit-scrollbar': {
            width: theme.spacing(1)
        },
        '&::-webkit-scrollbar-track': {
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.grey.A100
        }
    },
    toolbar: {
        ...theme.mixins.toolbar
    },
    spaceFiller: {
        width: drawerWidth
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
    }
}));

interface MenuItem {
    title: string;
    to: string;
    icon: ReactElement
}

const LayoutDrawer: React.FC = () => {
    const classes = useDrawerStyles();
    const [collapsed, setCollapsed] = React.useState(true);
    const [subscriptionsCollapsed, setSubscriptionsCollapsed] = React.useState(true);
    const toggleCollapse = () => setCollapsed(!collapsed);
    const toggleSubscriptions = () => setSubscriptionsCollapsed(!subscriptionsCollapsed);

    const renderMenuItem = (item: MenuItem) => (
        <ListItem button dense component={Link} to={item.to}>
            <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    );

    const renderMenu = (items: MenuItem[]) => (
        <List>
            {items.map(renderMenuItem)}
        </List>
    );

    const renderCollapseMenu = (items: MenuItem[]) => (
        <>
            <List>
                <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                    {renderMenu(items)}
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

    const renderSubscriptionMenuItem = (item: MenuItem) => (
        <ListItem button dense component={Link} to={item.to}>
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText primary={item.title} />
        </ListItem>
    );

    const renderSubscriptionsMenu = (items: MenuItem[]) => {
        const displayedItems: MenuItem[] = items.slice(0, 7);
        const otherItems: MenuItem[] = items.slice(7);
        return (
            <List>
                {displayedItems.map(renderSubscriptionMenuItem)}
                <Collapse in={!subscriptionsCollapsed} timeout="auto" unmountOnExit>
                    {otherItems.map(renderSubscriptionMenuItem)}
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

    const renderLinks = (items: MenuItem[]) => (
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

    const openedDrawer = (
        <div className={classes.root}>
            <section>
                {renderMenu(primaryMenu)}
            </section>
            <Divider />
            <section>
                {renderMenu(secondaryMenu)}
                {renderCollapseMenu(playlistsMenu)}
            </section>
            <Divider />
            <section>
                <Typography
                    className={classes.heading}
                    variant="overline"
                >
                    Подписки
                </Typography>
                {renderSubscriptionsMenu(subscriptionsMenu)}
            </section>
            <Divider />
            <section>
                <Typography
                    className={classes.heading}
                    variant="overline"
                >
                    Другие возможности
                </Typography>
                {renderMenu(otherFeatures)}
            </section>
            <Divider />
            <section>
                {renderMenu(optionsMenu)}
            </section>
            <Divider />
            {renderLinks(guideLinksPrimary)}
            {renderLinks(guideLinksSecondary)}
        </div>
    );

    return (
        <>
            {openedDrawer}
            <div className={classes.spaceFiller} />
        </>
    )
};


const useAppBarStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        backgroundColor: '#fff',
        borderWidth: 0
    },
    menuButton: {
        marginRight: theme.spacing(1.5)
    },
    logo: {
        width: 80
    },
    toolbar: {
        ...theme.mixins.toolbar
    },
    searchForm: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(1)
    },
    search: {
        width: '100%',
        maxWidth: 600
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
}));

const LayoutAppBar: React.FC = () => {
    const classes = useAppBarStyles();
    return (
        <>
            <AppBar
                position="fixed"
                variant="outlined"
                className={classes.appBar}
            >
                <Toolbar color="inherit">
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        onClick={() => null}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                    <form
                        className={classes.searchForm}
                    >
                        <TextField
                            className={classes.search}
                            variant="outlined"
                            margin="dense"
                            placeholder="Введите запрос"
                            InputProps={{
                                endAdornment: (
                                    <IconButton size="small">
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </form>
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <Badge
                            badgeContent={199}
                            color="secondary"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                    >
                        <Avatar className={classes.avatar} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
        </>
    )
};

const useLayoutStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    }
}));

interface LayoutProps {
    children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useLayoutStyles();
    return (
        <>
            <LayoutAppBar />
            <div className={classes.body}>
                <LayoutDrawer />
                <div className={classes.main}>
                    {children}
                </div>
            </div>
        </>
    )
};

export default Layout;
