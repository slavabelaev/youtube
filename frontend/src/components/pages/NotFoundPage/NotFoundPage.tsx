import React from "react";
import { ReactComponent as NotFoundImage } from "./NotFound.svg";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: 720
    }
}));

const NotFoundPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NotFoundImage
                className={classes.image}
            />
        </div>
    )
};

export default NotFoundPage;
