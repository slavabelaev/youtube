import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import AccountMenu from "./menus/AccountMenu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    paper: {
        width: '100%',
        maxWidth: 300
    },
    iconButton: {
        padding: theme.spacing(1)
    }
}));

const AccountMenuButton: React.FC = () => {
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
                className: classes.paper
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <AccountMenu />
        </Popover>
    );

    const button = (
        <IconButton
            className={classes.iconButton}
            edge="end"
            onClick={handleClick}
        >
            <Avatar
                className={classes.avatar}
            />
        </IconButton>
    );

    return (
        <>
            {button}
            {popover}
        </>
    );
};

export default AccountMenuButton;
