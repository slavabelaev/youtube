import React from "react";
import List from "@material-ui/core/List";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import AccountsMenu from "../AccountsMenu";
import LanguagesList from "../../LanguagesList";
import DescriptionBox from "../../common/DescriptionBox";
import LocationsList from "../../LocationsList";
import DarkThemeSwitchListItem from "../../listItems/DarkThemeSwitchListItem";
import PersonalChannelListItem from "../../listItems/PersonalChannelListItem";
import PaidMembershipsListItem from "../../listItems/PaidMembershipsListItem";
import StudioListItem from "../../listItems/StudioListItem";
import SwitchAccountListItem from "../../listItems/SwitchAccountListItem";
import SignOutListItem from "../../listItems/SignOutListItem";
import DarkThemeListItem from "../../listItems/DarkThemeListItem";
import LocationListItem from "../../listItems/LocationListItem";
import SettingsListItem from "../../listItems/SettingsListItem";
import PersonalDataListItem from "../../listItems/PersonalDataListItem";
import HelpListItem from "../../listItems/HelpListItem";
import SendFeedbackListItem from "../../listItems/SendFeedbackListItem";
import KeyboardShortcutsListItem from "../../listItems/KeyboardShortcutsListItem";
import RestrictedModeListItem from "../../listItems/RestrictedModeListItem";
import RestrictedModeSwitchListItem from "../../listItems/RestrictedModeSwitchListItem";
import LanguageListItem from "../../listItems/LanguageListItem";
import AccountListItem from "../AccountsMenu/AccountsListItem";
import PopoverAppBar from "../../PopoverAppBar";

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
        <PopoverAppBar
            title={title}
            onBack={() => setActiveView(initialView)}
        />
    );

    const primaryList = (
        <List>
            <PersonalChannelListItem/>
            <PaidMembershipsListItem/>
            <StudioListItem/>
            <SwitchAccountListItem 
                onClick={() => setActiveView(accountsView)}
            />
            <SignOutListItem/>
        </List>
    );

    const secondaryList = (
        <List>
            <DarkThemeListItem 
                onClick={() => setActiveView(darkThemeView)}
            />
            <LanguageListItem 
                onClick={() => setActiveView(languageView)}
            />
            <SettingsListItem/>
            <PersonalDataListItem/>
            <HelpListItem/>
            <SendFeedbackListItem/>
            <KeyboardShortcutsListItem/>
        </List>
    );

    const accountHeader = (
        <List>
            <AccountListItem
                fullName="Slava Belaev"
                email="slav@belaev.pro"
            />

            <ListItem
                dense
                color="secondary"
                component={Link}
                target="_blank"
                href="https://myaccount.google.com"
            >
                <ListItemAvatar />
                <ListItemText
                    primary="Manage your account"
                />
            </ListItem>
        </List>
    );

    const footerList = (
        <List>
            <LocationListItem
                onClick={() => setActiveView(locationView)}
            />
            <RestrictedModeListItem
                onClick={() => setActiveView(restrictedModeView)}
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
                <DarkThemeSwitchListItem />
            </List>
        </div>
    );

    const restrictedModeView = (
        <div>
            {renderToolbar('Restricted mode')}
            <DescriptionBox
                paragraphs={[
                    'This helps hide potentially mature videos. No filter is 100% accurate.',
                    'This setting only applies to this browser.'
                ]}
            />
            <List>
                <RestrictedModeSwitchListItem/>
            </List>
        </div>
    );

    const languageView = (
        <div>
            {renderToolbar('Choose your language')}
            <LanguagesList />
        </div>
    );

    const locationView = (
        <div>
            {renderToolbar('Choose your location')}
            <LocationsList />
        </div>
    );

    const [activeView, setActiveView] = React.useState(initialView);
    return activeView;
}

export default AccountMenu;
