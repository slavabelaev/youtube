import React, {ReactNode} from "react";
import Popover, {PopoverProps} from "@material-ui/core/Popover";
import Tooltip, {TooltipProps} from "@material-ui/core/Tooltip";
import {IconButton, IconButtonProps, Theme, useMediaQuery} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dialog from "@material-ui/core/Dialog";

export interface PopoverButtonProps extends IconButtonProps {
    content: ReactNode;
    tooltip?: TooltipProps['title'];
    PopoverPaperProps?: PopoverProps['PaperProps'];
}

function PopoverButton({
    content,
    children = <MoreVertIcon />,
    tooltip,
    PopoverPaperProps,
    ...IconButtonProps
}: PopoverButtonProps) {
    const isDownXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const popover = isDownXs ? (
        <Dialog
            fullWidth
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {content}
        </Dialog>
    ) : (
        <Popover
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            PaperProps={PopoverPaperProps}
            transitionDuration={0}
        >
            {content}
        </Popover>
    );

    const button = (
        <IconButton
            {...IconButtonProps}
            onClick={handleClick}
        >
            {children}
        </IconButton>
    );

    const buttonWithTooltip = tooltip ? (
        <Tooltip title={tooltip}>
            {button}
        </Tooltip>
    ) : null;

    return (
        <>
            {buttonWithTooltip || button}
            {popover}
        </>
    )
}

export default PopoverButton;
