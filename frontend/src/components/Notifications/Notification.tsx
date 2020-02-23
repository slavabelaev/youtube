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
    avatarSrc: AvatarProps['src'];
    imageSrc?: string;
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
        backgroundColor: theme.palette.grey["800"],
        margin: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius
    }
}));

function Notification(props: NotificationProps) {
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
                <Avatar src={props.avatarSrc} />
            </ListItemAvatar>
            <ListItemText
                primary={props.text}
                secondary={props.createdAt.toLocaleDateString()}
            />
            {props.imageSrc ? (
                <div
                    className={classes.media}
                    style={{
                        backgroundImage: `url(${props.imageSrc}`
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
}

export default Notification;
