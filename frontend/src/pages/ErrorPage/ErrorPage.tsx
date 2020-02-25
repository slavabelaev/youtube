import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2),
        margin: 'auto'
    }
}));

function ErrorPage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Typography
                variant="h5"
            >
                Error Page
            </Typography>
        </main>
    )
}

export default ErrorPage;
