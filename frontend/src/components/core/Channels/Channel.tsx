import React from "react";
import {Link} from "react-router-dom";
import {Avatar, AvatarProps, createStyles, Theme} from "@material-ui/core";
import {toStringNumber} from "../../../utils/numbers";
import SubscribeButton from "../../buttons/SubscribeButton";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface ChannelProps {
    title: string;
    subscribersNumber: number;
    avatarSrc: AvatarProps['src'];
    to: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        width: 104,
        height: 104,
        marginBottom: theme.spacing(1)
    },
    title: {
        textDecoration: 'none',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis'
    },
    subscribersLabel: {
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis'
    }
}));

function Channel(props: ChannelProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar
                className={classes.avatar}
                src={props.avatarSrc}
            />
            <Typography
                className={classes.title}
                variant="body1"
                color="textPrimary"
                component={Link}
                to={props.to}
            >
                {props.title}
            </Typography>
            <Typography
                className={classes.subscribersLabel}
                variant="body2"
                color="textSecondary"
            >
                {toStringNumber(props.subscribersNumber)} subscribers
            </Typography>
            <SubscribeButton
                size="small"
                color="default"
            />
        </div>
    )
}

export default Channel;
