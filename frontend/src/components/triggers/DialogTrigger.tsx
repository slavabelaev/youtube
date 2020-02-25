import React, {ReactElement, ReactNode, useState} from "react";
import {createStyles, Dialog, DialogProps, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PopoverAppBar, {PopoverAppBarProps} from "../PopoverAppBar";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";

export interface DialogTriggerProps {
    content: DialogProps['children'];
    renderTrigger: (onClick: VoidFunction) => ReactElement;
    renderActions?: (onClose: VoidFunction) => ReactNode;
    title?: PopoverAppBarProps['title'];
    maxWidth?: DialogProps['maxWidth'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        padding: 0
    },
    actions: {
        borderTop: `1px solid ${theme.palette.divider}`
    }
}));

function DialogTrigger({
    title,
    maxWidth,
    renderTrigger,
    content,
    renderActions
}: DialogTriggerProps) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);

    const closeButton = (
        <IconButton
            edge="end"
            onClick={handleToggle}
        >
            <CloseIcon />
        </IconButton>
    );

    const dialogAppBar = title ? (
        <PopoverAppBar
            title={title}
            endAction={closeButton}
        />
    ) : null;

    const dialogContent = (
        <DialogContent className={classes.content}>
            {content}
        </DialogContent>
    );

    const dialogActions = renderActions ? (
        <DialogActions className={classes.actions}>
            {renderActions(() => setOpen(false))}
        </DialogActions>
    ) : null;

    const dialog = (
        <Dialog
            open={open}
            onClose={handleToggle}
            maxWidth={maxWidth}
        >
            {dialogAppBar}
            {dialogContent}
            {dialogActions}
        </Dialog>
    );

    const button = renderTrigger(handleToggle);

    return (
        <>
            {button}
            {dialog}
        </>
    )
}

export default DialogTrigger;
