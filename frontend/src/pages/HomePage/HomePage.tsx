import React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Videos from "../../components/Videos/Videos";
import {generateGridVideos} from "../../services/videosService";

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        padding: theme.spacing(0, 2, 2, 2)
    }
}));

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <main className={classes.main}>
                <Videos
                    initialVariant="grid"
                    title="Рекомендованные"
                    onLoad={generateGridVideos}
                />
            </main>
        </>
    )
};

export default HomePage;
