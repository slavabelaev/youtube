import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsList from "./NotificationsList";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

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

const NotificationsButton: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            <AppBar
                className={classes.appBar}
                position="sticky"
                variant="outlined"
                color="inherit"
            >
                <Toolbar>
                    <Typography className={classes.toolbarTitle}>
                        Уведомления
                    </Typography>
                    <IconButton edge="end">
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <NotificationsList />
        </Popover>
    );

    const button = (
        <IconButton onClick={handleClick}>
            <Badge
                badgeContent={199}
                color="primary"
            >
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );

    return (
        <>
            {button}
            {popover}
        </>
    )
};

export default NotificationsButton;
