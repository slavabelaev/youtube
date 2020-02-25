import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import AuthForm from "../../components/forms/SignInForm";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(2),
        margin: 'auto'
    }
}));

function LibraryPage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <AuthForm/>
        </main>
    )
}

export default LibraryPage;
