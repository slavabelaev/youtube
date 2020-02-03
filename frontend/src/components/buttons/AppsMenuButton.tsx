import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import {IconButton} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import AppsMenu from "../menus/AppsMenu";

const AppsMenuButton: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const title = 'Приложения';

    const handleClose = () => {
        setAnchorEl(null);
    };

    const popover = (
        <Popover
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <AppsMenu />
        </Popover>
    );

    const button = (
        <Tooltip title={title}>
            <IconButton onClick={handleClick}>
                <AppsIcon />
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

export default AppsMenuButton;
