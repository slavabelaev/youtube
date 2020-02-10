import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../RouteListItem";
import {
    CHANNEL_ROUTE, HELP_ROUTE, KEYBOARD_SHORTCUTS_ROUTE,
    PAID_MEMBERSHIPS_ROUTE, PERSONAL_DATA_ROUTE, REVIEWS_ROUTE,
    SETTINGS_ROUTE,
    SIGN_OUT_ROUTE,
    STUDIO_ROUTE
} from "../../constants/routes";
import MenuListItem from "../MenuListItem";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import AccountsMenu from "./AccountsMenu";
import DarkThemeListItem from "../DarkThemeListItem";
import LanguagesList from "../LanguagesList";
import SafeModeListItem from "../SafeModeListItem";
import DescriptionBox from "../DescriptionBox";
import CountriesList from "../CountriesList";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme: Theme) => createStyles({
    link: {
        display: 'block',
        marginTop: theme.spacing(1),
        whiteSpace: 'nowrap'
    },
    appBar: {
        borderWidth: '0 0 1px 0'
    }
}));

const AccountMenu: React.FC = () => {
    const classes = useStyles();

    const renderToolbar = (title: string) => (
        <AppBar
            className={classes.appBar}
            position="sticky"
            variant="outlined"
            color="inherit"
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={() => setActiveView(initialView)}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );

    const primaryList = (
        <List>
            <RouteListItem {...CHANNEL_ROUTE} />
            <RouteListItem {...PAID_MEMBERSHIPS_ROUTE} />
            <RouteListItem {...STUDIO_ROUTE} />
            <MenuListItem
                title="Сменить аккаунт"
                icon={RecentActorsIcon}
                onClick={() => setActiveView(accountsView)}
            />
            <RouteListItem {...SIGN_OUT_ROUTE} />
        </List>
    );

    const secondaryList = (
        <List>
            <MenuListItem
                title="Тёмная тема: откл"
                icon={Brightness4Icon}
                onClick={() => setActiveView(darkThemeView)}
            />
            <MenuListItem
                title="Язык: Русский"
                icon={TranslateIcon}
                onClick={() => setActiveView(languagesView)}
            />
            <RouteListItem {...SETTINGS_ROUTE} />
            <RouteListItem {...PERSONAL_DATA_ROUTE} />
            <RouteListItem {...HELP_ROUTE} />
            <RouteListItem {...REVIEWS_ROUTE} />
            <RouteListItem {...KEYBOARD_SHORTCUTS_ROUTE} />
        </List>
    );

    const accountHeader = (
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
                                Управление аккаунтом
                            </Link>
                        </>
                    }
                />
            </ListItem>
        </List>
    );

    const footerList = (
        <List>
            <ListItem
                dense
                button
                onClick={() => setActiveView(countriesView)}
            >
                <ListItemText
                    primary="Страна: Россия"
                />
                <ListItemSecondaryAction>
                    <ChevronRightIcon />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem
                dense
                button
                onClick={() => setActiveView(safeModeView)}
            >
                <ListItemText
                    primary="Безопасный режим: откл."
                />
                <ListItemSecondaryAction>
                    <ChevronRightIcon />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );

    const initialView = (
        <div>
            {accountHeader}
            <Divider />
            {primaryList}
            <Divider />
            {secondaryList}
            <Divider />
            {footerList}
        </div>
    );

    const accountsView = (
        <div>
            {renderToolbar('Аккаунты')}
            <AccountsMenu />
        </div>
    );

    const darkThemeView = (
        <div>
            {renderToolbar('Темная тема')}
            <DescriptionBox
                paragraphs={[
                    'В ночном режиме цветовая схема приложения меняется со светлой на темную.',
                    'Настройка, которую вы выберете, будет действовать только в этом браузере.'
                ]}
            />
            <List>
                <DarkThemeListItem />
            </List>
        </div>
    );

    const safeModeView = (
        <div>
            {renderToolbar('Безопасный режим')}
            <DescriptionBox
                paragraphs={[
                    'В безопасном режиме скрыты ролики, которые не подходят для детей. Хотя идеальных фильтров не существует, в большинстве случаев защита работает.',
                    'Безопасный режим будет включен только в этом браузере.'
                ]}
            />
            <List>
                <SafeModeListItem />
            </List>
        </div>
    );

    const languagesView = (
        <div>
            {renderToolbar('Выберите язык')}
            <LanguagesList />
        </div>
    );

    const countriesView = (
        <div>
            {renderToolbar('Выберите страну')}
            <CountriesList />
        </div>
    );

    const [activeView, setActiveView] = React.useState(initialView);
    return activeView;
};

export default AccountMenu;
