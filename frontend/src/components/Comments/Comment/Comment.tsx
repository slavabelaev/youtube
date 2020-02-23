import {makeStyles} from "@material-ui/core/styles";
import {AvatarProps, createStyles, Theme} from "@material-ui/core";
import LikeDislikeButton, {LikeDislikeButtonProps} from "../../buttons/LikeDislikeButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import React, {ReactNode} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {formatDistance} from "date-fns";
import CommentPopoverButton from "./CommentPopoverButton";
import Tooltip from "@material-ui/core/Tooltip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export interface CommentBaseProps {
    variant?: 'mini' | 'normal';
}

export interface CommentProps extends CommentBaseProps {
    avatarSrc: AvatarProps['src'];
    avatarTo?: string;
    title: ReactNode;
    titleTo?: string;
    text: ReactNode;
    createdAt: Date;
    initialLikes: LikeDislikeButtonProps['initialLikes'];
    initialDislikes: LikeDislikeButtonProps['initialDislikes'];
    initialChecked: LikeDislikeButtonProps['initialChecked'];
    edited?: boolean;
    verified?: boolean;
}

export const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        padding: theme.spacing(0, 0, 0, 7),
        minHeight: 'auto'
    },
    title: {
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: theme.spacing(1),
        textDecoration: 'none',
    },
    verificationIcon: {
        marginLeft: theme.spacing(.5)
    },
    avatar_variant_mini: {
        width: 32,
        height: 32
    }
}));

function Comment({
    variant = 'normal',
    avatarSrc,
    avatarTo = '',
    title,
    titleTo = '',
    text,
    createdAt,
    initialLikes,
    initialDislikes,
    initialChecked,
    edited = false,
    verified= false,

}: CommentProps) {
    const classes = useStyles();

    const avatar = (
        <Avatar
            className={clsx({
                [classes.avatar_variant_mini]: variant === 'mini'
            })}
            component={Link}
            to={avatarTo}
            src={avatarSrc}
        />
    );

    const verificationIcon = verified ? (
        <Tooltip
            title="Verified"
        >
            <CheckCircleIcon
                className={classes.verificationIcon}
                fontSize="inherit"
            />
        </Tooltip>
    ) : null;

    const titleNode = (
        <Typography
            className={classes.title}
            variant="inherit"
            color="textPrimary"
            component={Link}
            to={titleTo}
        >
            {title}
            {verificationIcon}
        </Typography>
    );

    const createdAtNode = (
        <Typography
            variant="body2"
            color="textSecondary"
            component="span"
        >
            {formatDistance(new Date(), createdAt)}
            {edited ? ' (edited)' : null}
        </Typography>
    );

    const listItem = (
        <ListItem
            disableGutters
            alignItems="flex-start"
        >
            <ListItemAvatar>
                {avatar}
            </ListItemAvatar>
            <ListItemText
                primary={
                    <>
                        {titleNode}
                        {createdAtNode}
                    </>
                }
                secondary={text}
            />
            <ListItemSecondaryAction>
                <CommentPopoverButton />
            </ListItemSecondaryAction>
        </ListItem>
    );

    const toolbar = (
        <Toolbar className={classes.toolbar}>
            <LikeDislikeButton
                initialLikes={initialLikes}
                initialDislikes={initialDislikes}
                initialChecked={initialChecked}
                LikeButtonProps={{
                    size: 'small'
                }}
                DislikeButtonProps={{
                    size: 'small'
                }}
            />
            <Button
                variant="text"
                color="inherit"
                size="small"
            >
                Reply
            </Button>
        </Toolbar>
    );

    return (
        <div>
            {listItem}
            {toolbar}
        </div>
    )
}

export default Comment;
