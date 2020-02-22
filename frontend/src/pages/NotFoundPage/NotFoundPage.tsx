import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`
    }
}));

function NotFoundPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography
                variant="h3"
                component="h1"
            >
                Page Not Found
            </Typography>
        </div>
    )
}

export default NotFoundPage;
