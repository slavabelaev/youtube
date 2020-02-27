import React from "react";
import faker from "faker/locale/en";
import Toolbar, {ToolbarProps} from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {toStringNumber} from "../../utils/numbers";
import SubscribeButton from "../buttons/SubscribeButton";
import NotificationsToggleButton from "../buttons/NotificationsToggleButton";

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

function ChannelToolbar(props: ChannelToolbar) {
    const classes = useStyles();
    return (
        <Toolbar {...props}>
            <ListItem
                className={classes.listItem}
                disableGutters
            >
                <ListItemAvatar>
                    <Avatar
                        src={faker.image.avatar()}
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
                            {faker.company.companyName()}
                        </Typography>
                    }
                    secondary={`${toStringNumber(Math.round(Math.random() * 9999999), 0)} subscribers`}
                />
            </ListItem>
            <aside className={classes.aside}>
                <SubscribeButton />
                <NotificationsToggleButton
                    className={classes.notificationsButton}
                />
            </aside>
        </Toolbar>
    );
}

export default ChannelToolbar;
