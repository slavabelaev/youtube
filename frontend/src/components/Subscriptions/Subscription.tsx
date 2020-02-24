import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LinkListItem from "../common/LinkListItem";
import {makeStyles} from "@material-ui/core/styles";
import {AvatarProps, createStyles, Theme} from "@material-ui/core";

export interface SubscriptionProps {
    title: string;
    to: string;
    avatarSrc: AvatarProps['src'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

function Subscription(props: SubscriptionProps) {
    const classes = useStyles();

    const renderAvatar = (avatarSrc: SubscriptionProps['avatarSrc']) => (
        <Avatar
            src={avatarSrc}
            className={classes.avatar}
        />
    );

    return (
        <LinkListItem
            title={props.title}
            to={props.to}
            icon={() => renderAvatar(props.avatarSrc)}
        />
    );
}

export default Subscription;
