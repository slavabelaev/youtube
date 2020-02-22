import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LinkListItem from "../common/LinkListItem";
import {makeStyles} from "@material-ui/core/styles";
import {AvatarProps, createStyles, Theme} from "@material-ui/core";

export interface SubscriptionModel {
    id: string;
    title: string;
    linkTo: string;
    avatarUrl: AvatarProps['src'];
}

export interface SubscriptionProps extends SubscriptionModel {}

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

function Subscription(props: SubscriptionProps) {
    const classes = useStyles();

    const renderAvatar = (avatarUrl: SubscriptionProps['avatarUrl']) => (
        <Avatar
            src={avatarUrl}
            className={classes.avatar}
        />
    );

    return (
        <LinkListItem
            key={props.id}
            title={props.title}
            to={props.linkTo}
            icon={() => renderAvatar(props.avatarUrl)}
        />
    );
}

export default Subscription;
