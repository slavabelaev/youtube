import React, {ReactNode} from "react";
import Popover, {PopoverProps} from "@material-ui/core/Popover";
import Tooltip, {TooltipProps} from "@material-ui/core/Tooltip";
import {IconButton, IconButtonProps} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export interface PopoverButtonProps extends IconButtonProps {
    content: ReactNode;
    tooltip?: TooltipProps['title'];
    PopoverPaperProps?: PopoverProps['PaperProps'];
}

const PopoverButton: React.FC<PopoverButtonProps> = ({
    content,
    children = <MoreVertIcon />,
    tooltip,
    PopoverPaperProps,
    ...IconButtonProps
}) => {
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
};

export default PopoverButton;
