import React from "react";
import { ReactComponent as NotFound } from "./NotFound.svg";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const NotFoundPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NotFound />
        </div>
    )
};

export default NotFoundPage;
