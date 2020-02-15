import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import Notifications from "../Notifications";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import {SETTINGS_MENU_ITEM} from "../../pages/SettingsPage";

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

const NotificationsMenuButton: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const title = 'Уведомления';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const appBar = (
        <AppBar
            className={classes.appBar}
            position="sticky"
            variant="outlined"
            color="inherit"
        >
            <Toolbar>
                <Typography className={classes.toolbarTitle}>
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

    const popover = (
        <Popover
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
            PaperProps={{
                className: classes.popoverPaper
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            {appBar}
            <Notifications />
        </Popover>
    );

    const button = (
        <Tooltip title={title}>
            <IconButton onClick={handleClick}>
                <Badge
                    badgeContent={199}
                    color="primary"
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
    );

    return (
        <>
            {button}
            {popover}
        </>
    )
};

export default NotificationsMenuButton;
