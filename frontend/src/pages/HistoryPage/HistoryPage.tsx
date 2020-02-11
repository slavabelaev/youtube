import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(2),
        margin: 'auto'
    }
}));

const HistoryPage: React.FC = () => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            History Page
        </main>
    )
};

export default HistoryPage;
