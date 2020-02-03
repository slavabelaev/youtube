import React from "react";
import {List, ListProps} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export interface Comment {
    avatarUrl: string;
    userName: string;
    text: string;
    createdAt: Date;
    likesNumber: number;
    dislikesNumber: number;
}

export interface CommentsProps {
    items?: Comment[];
    listProps?: ListProps;
    listItemProps?: {
        className: string;
    };
}

const generateComments = (): Comment[] => Array(12).fill({
    avatarUrl: '',
    userName: 'User Name',
    text: 'Some message',
    createdAt: new Date(),
    likesNumber: 200,
    dislikesNumber: 100,
});

const Comments: React.FC<CommentsProps> = ({
    items = generateComments(),
    listProps,
    listItemProps
}) => {
    const renderItem = (item: Comment) => (
        <ListItem
            {...listItemProps}
            disableGutters
        >
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText
                primary={item.userName}
                secondary={item.text}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );

    return (
        <List {...listProps}>
            {items.map(renderItem)}
        </List>
    )
};

export default Comments;
