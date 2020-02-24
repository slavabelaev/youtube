import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import Notifications from "../Notifications";
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import {SETTINGS_MENU_ITEM} from "../../pages/SettingsPage";
import PopoverButton from "./PopoverButton";
import PopoverAppBar from "../PopoverAppBar";

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

function NotificationsPopoverButton() {
    const classes = useStyles();
    const title = 'Notifications';

    const settingsIconButton = (
        <Tooltip title={SETTINGS_MENU_ITEM.title}>
            <IconButton
                edge="end"
                component={Link}
                to={SETTINGS_MENU_ITEM.to}
            >
                <SettingsIcon />
            </IconButton>
        </Tooltip>
    );

    const appBar = (
        <PopoverAppBar
            title={title}
            endAction={settingsIconButton}
        />
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
}

export default NotificationsPopoverButton;
