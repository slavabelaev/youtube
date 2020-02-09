import React from "react";
import {Link} from "react-router-dom";
import {Avatar, createStyles, Theme} from "@material-ui/core";
import {toStringNumber} from "../utils/numbers";
import SubscribeButton from "./buttons/SubscribeButton";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface ChannelProps {
    id: string;
    title: string;
    subscribersNumber: number;
    linkTo: string;
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
        textAlign: 'center'
    },
    subscribersLabel: {
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    }
}));

const Channel: React.FC<ChannelProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar
                className={classes.avatar}
            />
            <Typography
                className={classes.title}
                variant="subtitle1"
                color="textPrimary"
                component={Link}
                to={props.linkTo}
            >
                {props.title}
            </Typography>
            <Typography
                className={classes.subscribersLabel}
                variant="body1"
                color="textSecondary"
            >
                {`${toStringNumber(props.subscribersNumber)} подписчиков`}
            </Typography>
            <SubscribeButton
                size="small"
                color="default"
            />
        </div>
    )
};

export default Channel;
