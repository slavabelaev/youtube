import {AvatarProps, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import React from "react";
import PopoverButton from "../buttons/PopoverButton";
import NotificationMenu from "./NotificationMenu";

export interface NotificationProps {
    id: string;
    text: string;
    avatarUrl: AvatarProps['src'];
    imageUrl?: string;
    createdAt: Date,
    linkTo: string;
}

export const useStyles = makeStyles((theme: Theme) => createStyles({
    media: {
        minWidth: theme.spacing(12),
        maxWidth: theme.spacing(12),
        height: theme.spacing(8),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey.A700,
        margin: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius
    }
}));

const Notification: React.FC<NotificationProps> = (props) => {
    const classes = useStyles();

    return (
        <ListItem
            dense
            button
            alignItems="flex-start"
            component={Link}
            to={props.linkTo}
        >
            <ListItemAvatar>
                <Avatar src={props.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
                primary={props.text}
                secondary={props.createdAt.toLocaleDateString()}
            />
            {props.imageUrl ? (
                <div
                    className={classes.media}
                    style={{
                        backgroundImage: `url(${props.imageUrl}`
                    }}
                />
            ) : null}
            <ListItemSecondaryAction>
                <PopoverButton
                    content={<NotificationMenu />}
                />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default Notification;
