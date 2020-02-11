import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Divider from "@material-ui/core/Divider";
import AccountsList from "../AccountsList";
import RouteListItem from "../RouteListItem";
import {SIGN_OUT_MENU_ITEM} from "../../pages/SignInPage";

const AccountsMenu: React.FC = () => {
    const actionsList = (
        <List>
            <ListItem button dense>
                <ListItemIcon>
                    <PersonAddIcon />
                </ListItemIcon>
                <ListItemText
                    primary="Добавить аккаунт"
                />
            </ListItem>
            <RouteListItem {...SIGN_OUT_MENU_ITEM} />
        </List>
    );

    return (
        <div>
            <AccountsList />
            <Divider />
            {actionsList}
        </div>
    );
};

export default AccountsMenu;
