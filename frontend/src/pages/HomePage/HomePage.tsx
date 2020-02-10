import React from "react";
import VideosGrid from "../../components/VideosGrid";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        padding: theme.spacing(0, 2, 2, 2)
    }
}));

const HomePage: React.FC = () => {
    const classes = useStyles();

    const toolbar = (
        <Toolbar>
            <Typography
                variant="h6"
            >
                Рекомендованные
            </Typography>
        </Toolbar>
    );

    return (
        <>
            {toolbar}
            <main className={classes.main}>
                <VideosGrid />
            </main>
        </>
    )
};

export default HomePage;
