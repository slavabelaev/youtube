import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CheckIcon from "@material-ui/icons/Check";

export interface AccountModel {
    avatarSrc: string;
    fullName: string;
    email: string;
    selected?: boolean;
}

export interface AccountListItemProps extends AccountModel {}

export function AccountListItem({
    fullName,
    email,
    avatarSrc,
    selected = false
}: AccountListItemProps) {
    const selectedIcon = (
        <ListItemSecondaryAction>
            <CheckIcon />
        </ListItemSecondaryAction>
    );

    return (
        <ListItem dense button>
            <ListItemAvatar>
                <Avatar src={avatarSrc} />
            </ListItemAvatar>
            <ListItemText
                primary={fullName}
                secondary={email}
            />
            {selected ? selectedIcon : null}
        </ListItem>
    )
}

export default AccountListItem;
