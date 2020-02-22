import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(2),
        margin: 'auto'
    }
}));

function PaidMembershipsPage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            Playlist Page
        </main>
    )
}

export default PaidMembershipsPage;
