import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Divider from "@material-ui/core/Divider";
import AccountsList from "../AccountsList";

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
            <ListItem button dense>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                    primary="Выйти"
                />
            </ListItem>
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
