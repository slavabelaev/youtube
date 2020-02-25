import React, {ReactElement, useState} from "react";
import {Snackbar, SnackbarProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export interface SnackbarTriggerProps {
    message: SnackbarProps['message'];
    renderTrigger: (onClick: VoidFunction) => ReactElement;
}

function SnackbarTrigger(props: SnackbarTriggerProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const snackbar = (
        <Snackbar
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom'
            }}
            open={open}
            autoHideDuration={5000}
            message={props.message}
            onClose={handleClose}
            action={
                <Button
                    color="secondary"
                    size="small"
                    onClick={handleClose}
                >
                    UNDO
                </Button>
            }
        />
    );

    const trigger = props.renderTrigger(handleOpen);

    return (
        <>
            {trigger}
            {snackbar}
        </>
    )
}

export default SnackbarTrigger;
