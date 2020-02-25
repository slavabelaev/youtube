import React from "react";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CheckIcon from "@material-ui/icons/Check";

export interface AccountListItemProps {
    avatarSrc?: string;
    fullName: string;
    email: string;
    selected?: boolean;
    onClick?: ListItemProps['onClick'];
}

export function AccountListItem({
    fullName,
    email,
    avatarSrc,
    selected = false,
    onClick
}: AccountListItemProps) {
    const listItemSecondaryAction = (
        <ListItemSecondaryAction>
            <CheckIcon />
        </ListItemSecondaryAction>
    );

    const listItemAvatar = (
        <ListItemAvatar>
            <Avatar src={avatarSrc} />
        </ListItemAvatar>
    );

    const listItemText = (
        <ListItemText
            primary={fullName}
            secondary={email}
        />
    );

    const listItemBody = (
        <>
            {listItemAvatar}
            {listItemText}
            {selected ? listItemSecondaryAction : null}
        </>
    );

    return Boolean(onClick) ? (
        <ListItem dense button>
            {listItemBody}
        </ListItem>
    ) : (
        <ListItem dense>
            {listItemBody}
        </ListItem>
    )
}

export default AccountListItem;
