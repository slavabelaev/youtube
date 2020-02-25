import React, {ReactNode, useState} from "react";
import DialogTrigger, {DialogTriggerProps} from "./DialogTrigger";
import SignInForm from "../forms/SignInForm";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import SignUpForm from "../forms/SignUpForm";
import RecoveryForm from "../forms/RecoveryForm";

export interface SignInDialogTriggerProps {
    renderTrigger: DialogTriggerProps['renderTrigger'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        padding: theme.spacing(3)
    }
}));

function SignInDialogTrigger({
    renderTrigger
}: SignInDialogTriggerProps) {
    const classes = useStyles();

    const signInView = (
        <SignInForm
            onSignUp={() => setView(signUpView)}
            onRecovery={() => setView(recoveryView)}
        />
    );

    const signUpView = (
        <SignUpForm
            onSignIn={() => setView(signInView)}
        />
    );

    const recoveryView = (
        <RecoveryForm
            onSignIn={() => setView(signInView)}
        />
    );

    const [view, setView] = useState<ReactNode>(signInView);

    const content = (
        <div className={classes.content}>
            {view}
        </div>
    );

    return (
        <DialogTrigger
            maxWidth="xs"
            content={content}
            renderTrigger={renderTrigger}
        />
    )
}

export default SignInDialogTrigger;
