import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import AccountMenu from "../menus/AccountMenu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative'
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    paper: {
        width: '100%',
        maxWidth: 300
    }
}));

const AvatarPopoverButton: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderPopover = () => {
        const open = Boolean(anchorEl);
        return (
            <Popover
                open={open}
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
        )
    };

    return (
        <div className={classes.root}>
            <IconButton
                edge="end"
                onClick={handleClick}
            >
                <Avatar className={classes.avatar} />
            </IconButton>
            {renderPopover()}
        </div>
    );
};

export default AvatarPopoverButton;
