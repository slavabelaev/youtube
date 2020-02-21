import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import Notifications from "../Notifications";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import {SETTINGS_MENU_ITEM} from "../../pages/SettingsPage";
import PopoverButton from "./PopoverButton";

const useStyles = makeStyles((theme: Theme) => createStyles({
    popoverPaper: {
        width: '100%',
        maxWidth: 500
    },
    appBar: {
        borderWidth: '0 0 1px 0',
    },
    toolbarTitle: {
        flex: 1
    }
}));

const NotificationsPopoverButton: React.FC = () => {
    const classes = useStyles();
    const title = 'Уведомления';

    const appBar = (
        <AppBar
            className={classes.appBar}
            position="sticky"
            variant="outlined"
            color="inherit"
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <Tooltip title={SETTINGS_MENU_ITEM.title}>
                    <IconButton
                        edge="end"
                        component={Link}
                        to={SETTINGS_MENU_ITEM.to}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );

    const content = (
        <>
            {appBar}
            <Notifications />
        </>
    );

    const iconWithBadge = (
        <Badge
            badgeContent={199}
            color="primary"
        >
            <NotificationsIcon />
        </Badge>
    );

    return (
        <PopoverButton
            content={content}
            tooltip={title}
            PopoverPaperProps={{
                className: classes.popoverPaper
            }}
        >
            {iconWithBadge}
        </PopoverButton>
    )
};

export default NotificationsPopoverButton;
