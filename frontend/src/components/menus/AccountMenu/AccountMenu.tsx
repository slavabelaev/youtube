import React from "react";
import List from "@material-ui/core/List";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LinkListItem from "../../common/LinkListItem";
import MenuListItem from "../../common/MenuListItem";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import {Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SecurityIcon from "@material-ui/icons/Security";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import Typography from "@material-ui/core/Typography";
import AccountsMenu from "../AccountsMenu";
import LanguagesList from "../../LanguagesList";
import DescriptionBox from "../../common/DescriptionBox";
import CountriesList from "../../CountriesList";
import AppBar from "@material-ui/core/AppBar";
import {CHANNEL_MENU_ITEM} from "../../../pages/ChannelPage";
import {PAID_MEMBERSHIPS_MENU_ITEM} from "../../../pages/PaidMembershipsPage";
import {STUDIO_MENU_ITEM} from "../../../pages/StudioPage";
import {SIGN_OUT_MENU_ITEM} from "../../../pages/SignInPage";
import {SETTINGS_MENU_ITEM} from "../../../pages/SettingsPage";
import {PERSONAL_DATA_MENU_ITEM} from "../../../pages/PersonalDataPage";
import {HELP_MENU_ITEM} from "../../../pages/HelpPage";
import {REVIEWS_MENU_ITEM} from "../../../pages/ReviewsPage";
import {KEYBOARD_SHORTCUTS_MENU_ITEM} from "../../../pages/KeyboardShortcutsPage";
import SwitchListItem from "../../common/SwitchListItem";

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
            <LinkListItem {...CHANNEL_MENU_ITEM} />
            <LinkListItem {...PAID_MEMBERSHIPS_MENU_ITEM} />
            <LinkListItem {...STUDIO_MENU_ITEM} />
            <MenuListItem
                title="Сменить аккаунт"
                icon={<RecentActorsIcon />}
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(accountsView)}
            />
            <LinkListItem {...SIGN_OUT_MENU_ITEM} />
        </List>
    );

    const secondaryList = (
        <List>
            <MenuListItem
                title="Тёмная тема: откл"
                icon={<BrightnessIcon />}
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(darkThemeView)}
            />
            <MenuListItem
                title="Язык: Русский"
                icon={<TranslateIcon />}
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(languagesView)}
            />
            <LinkListItem {...SETTINGS_MENU_ITEM} />
            <LinkListItem {...PERSONAL_DATA_MENU_ITEM} />
            <LinkListItem {...HELP_MENU_ITEM} />
            <LinkListItem {...REVIEWS_MENU_ITEM} />
            <LinkListItem {...KEYBOARD_SHORTCUTS_MENU_ITEM} />
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
            <MenuListItem
                title="Страна: Россия"
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(countriesView)}
            />
            <MenuListItem
                title="Безопасный режим: откл."
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(safeModeView)}
            />
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
                <SwitchListItem
                    title="Темная тема"
                    icon={<Brightness4Icon />}
                />
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
                <SwitchListItem
                    title="Безопасный режим"
                    icon={<SecurityIcon />}
                />
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
