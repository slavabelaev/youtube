import React from "react";
import List from "@material-ui/core/List";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LinkListItem from "../../common/LinkListItem";
import MenuListItem from "../../common/MenuListItem";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
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
import DarkModeSwitchListItem from "../../listItems/DarkModeSwitchListItem";

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

function AccountMenu() {
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
                <Typography variant="h6">
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
                title="Switch account"
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
                title="Dark theme: off"
                icon={<BrightnessIcon />}
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(darkThemeView)}
            />
            <MenuListItem
                title="Language: English"
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
                                Manage your account
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
                title="Country: USA"
                endIcon={<ChevronRightIcon />}
                onClick={() => setActiveView(countriesView)}
            />
            <MenuListItem
                title="Safe mode: off"
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
            {renderToolbar('Accounts')}
            <AccountsMenu />
        </div>
    );

    const darkThemeView = (
        <div>
            {renderToolbar('Dark Theme')}
            <DescriptionBox
                paragraphs={[
                    'Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!',
                    'Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!',
                    'Your Dark theme setting will apply to this browser only.'
                ]}
            />
            <List>
                <DarkModeSwitchListItem />
            </List>
        </div>
    );

    const safeModeView = (
        <div>
            {renderToolbar('Safe mode')}
            <DescriptionBox
                paragraphs={[
                    'Safe mode description will here'
                ]}
            />
            <List>
                <SwitchListItem
                    title="Safe mode"
                    icon={<SecurityIcon />}
                />
            </List>
        </div>
    );

    const languagesView = (
        <div>
            {renderToolbar('Choose your language')}
            <LanguagesList />
        </div>
    );

    const countriesView = (
        <div>
            {renderToolbar('Choose your country')}
            <CountriesList />
        </div>
    );

    const [activeView, setActiveView] = React.useState(initialView);
    return activeView;
}

export default AccountMenu;
