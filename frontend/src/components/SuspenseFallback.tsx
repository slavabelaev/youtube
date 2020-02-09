import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circularProgress: {
        margin: theme.spacing(3)
    }
}));

const SuspenseFallback: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress
                size={32}
                className={classes.circularProgress}
            />
        </div>
    )
};

export default SuspenseFallback;
