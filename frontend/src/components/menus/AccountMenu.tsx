import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../common/RouteListItem";
import {
    CHANNEL_ROUTE, HELP_ROUTE,
    PAID_MEMBERSHIPS_ROUTE, PERSONAL_DATA_ROUTE, REVIEWS_ROUTE,
    SETTINGS_ROUTE,
    SIGN_OUT_ROUTE,
    STUDIO_ROUTE
} from "../../constants/routes";
import MenuListItem from "../common/MenuListItem";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    link: {
        display: 'block',
        marginTop: theme.spacing(1),
        whiteSpace: 'nowrap'
    }
}));
const AccountMenu: React.FC = () => {
    const classes = useStyles();

    const primaryList = (
        <List>
            <RouteListItem {...CHANNEL_ROUTE} />
            <RouteListItem {...PAID_MEMBERSHIPS_ROUTE} />
            <RouteListItem {...STUDIO_ROUTE} />
            <MenuListItem title="Сменить аккаунт" icon={RecentActorsIcon} />
            <RouteListItem {...SIGN_OUT_ROUTE} />
        </List>
    );

    const secondaryList = (
        <List>
            <MenuListItem title="Тёмная тема: откл" icon={Brightness4Icon} />
            <MenuListItem title="Язык: Русский" icon={TranslateIcon} />
            <RouteListItem {...SETTINGS_ROUTE} />
            <RouteListItem {...PERSONAL_DATA_ROUTE} />
            <RouteListItem {...HELP_ROUTE} />
            <RouteListItem {...REVIEWS_ROUTE} />
            <MenuListItem title="Тёмная тема: откл." icon={KeyboardIcon} />
        </List>
    );

    const accountList = (
        <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary="Slava Belaev"
                    secondary={
                        <>
                            <div>slav@belaev.pro</div>
                            <Link
                                className={classes.link}
                                color="secondary"
                                target="_blank"
                                href="https://myaccount.google.com"
                            >
                                Управление аккаунтом Google
                            </Link>
                        </>
                    }
                />
            </ListItem>
        </List>
    );

    const footerList = (
        <List>
            <ListItem dense button>
                <ListItemText
                    primary="Страна: Россия"
                />
                <ListItemSecondaryAction>
                    <ChevronRightIcon />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem dense button>
                <ListItemText
                    primary="Безопасный режим: откл."
                />
                <ListItemSecondaryAction>
                    <ChevronRightIcon />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );

    return (
        <div>
            {accountList}
            <Divider />
            {primaryList}
            <Divider />
            {secondaryList}
            <Divider />
            {footerList}
        </div>
    )
};

export default AccountMenu;
