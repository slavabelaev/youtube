import React from "react";
import SignInDialogTrigger, {SignInDialogTriggerProps} from "../triggers/SignInDialogTrigger";
import {Button} from "@material-ui/core";

function SignInButton() {
    const renderButton: SignInDialogTriggerProps['renderTrigger'] = (openDialog) => (
        <Button
            variant="contained"
            color="secondary"
            onClick={openDialog}
        >
            Sign In
        </Button>
    );

    return (
        <SignInDialogTrigger
            renderTrigger={renderButton}
        />
    )
}

export default SignInButton;
