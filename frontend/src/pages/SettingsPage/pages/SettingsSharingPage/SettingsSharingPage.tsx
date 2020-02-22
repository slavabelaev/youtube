import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(3, 2),
        margin: '0 auto'
    }
}));

function SettingsSharingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Sync Settings
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                >
                    Sync settings description
                </Typography>
            </header>
        </div>
    )
}

export default SettingsSharingPage;
