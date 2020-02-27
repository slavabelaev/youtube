import React from "react";
import AuthDialogTrigger, {AuthDialogTriggerProps} from "../triggers/AuthDialogTrigger";
import {Button} from "@material-ui/core";

function SignInButton() {
    const renderButton: AuthDialogTriggerProps['renderTrigger'] = (openDialog) => (
        <Button
            variant="contained"
            color="secondary"
            onClick={openDialog}
        >
            Sign In
        </Button>
    );

    return (
        <AuthDialogTrigger
            renderTrigger={renderButton}
        />
    )
}

export default SignInButton;
