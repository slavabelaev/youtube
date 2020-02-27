import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import Videos from "../../components/core/Videos";
import {generateListVideos} from "../../services/videosService";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(2),
        margin: 'auto'
    }
}));

function SearchPage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Videos
                onLoad={generateListVideos}
            />
        </main>
    )
}

export default SearchPage;
