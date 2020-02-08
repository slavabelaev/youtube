import React from "react";
import Toolbar, {ToolbarProps} from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {toStringNumber} from "../utils/numbers";
import SubscribeButton from "./buttons/SubscribeButton";
import ChannelNotificationsButton from "./buttons/ChannelNotificationsButton";

const useStyles = makeStyles((theme: Theme) => createStyles({
    listItem: {
        width: 'auto'
    },
    listItemPrimary: {
        textDecoration: 'none'
    },
    aside: {
        marginLeft: 'auto'
    },
    notificationsButton: {
        marginLeft: theme.spacing(1)
    }
}));

export interface ChannelToolbar extends ToolbarProps {}

const ChannelToolbar: React.FC<ChannelToolbar> = (props) => {
    const classes = useStyles();
    return (
        <Toolbar {...props}>
            <ListItem
                className={classes.listItem}
                disableGutters
            >
                <ListItemAvatar>
                    <Avatar
                        component={Link}
                        to="/channel/1"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            className={classes.listItemPrimary}
                            component={Link}
                            to="/channel/1"
                            color="inherit"
                        >
                            Название канала
                        </Typography>
                    }
                    secondary={`${toStringNumber(998999, 0)} подписчиков`}
                />
            </ListItem>
            <aside className={classes.aside}>
                <SubscribeButton />
                <ChannelNotificationsButton
                    className={classes.notificationsButton}
                />
            </aside>
        </Toolbar>
    );
};

export default ChannelToolbar;
