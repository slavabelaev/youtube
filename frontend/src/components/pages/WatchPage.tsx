import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {}
}));

const WatchPage: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <div>Watch Page</div>
        </>
    )
};

export default WatchPage;
