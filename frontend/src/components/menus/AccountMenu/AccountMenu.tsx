import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
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
import LanguageListItem from "../../listItems/LanguageListItem";
import AccountListItem from "../AccountsMenu/AccountListItem";
import LocationView from "./views/LocationView";
import LanguageView from "./views/LanguageView";
import RestrictedModeView from "./views/RestrictedModeView";
import DarkThemeView from "./views/DarkThemeView";
import AccountsView from "./views/AccountsView";

function AccountMenu() {
    const primaryList = (
        <List>
            <PersonalChannelListItem/>
            <PaidMembershipsListItem/>
            <StudioListItem/>
            <SwitchAccountListItem 
                onClick={() => setView(accountsView)}
            />
            <SignOutListItem/>
        </List>
    );

    const secondaryList = (
        <List>
            <DarkThemeListItem 
                onClick={() => setView(darkThemeView)}
            />
            <LanguageListItem 
                onClick={() => setView(languageView)}
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
                onClick={() => setView(locationView)}
            />
            <RestrictedModeListItem
                onClick={() => setView(restrictedModeView)}
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
        <AccountsView
            onBack={() => setView(initialView)}
        />
    );

    const darkThemeView = (
        <DarkThemeView
            onBack={() => setView(initialView)}
        />
    );

    const restrictedModeView = (
        <RestrictedModeView
            onBack={() => setView(initialView)}
        />
    );

    const languageView = (
        <LanguageView
            onBack={() => setView(initialView)}
        />
    );

    const locationView = (
        <LocationView
            onBack={() => setView(initialView)}
        />
    );

    const [view, setView] = React.useState(initialView);
    return view;
}

export default AccountMenu;
