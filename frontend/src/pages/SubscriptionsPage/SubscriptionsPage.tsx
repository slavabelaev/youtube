import React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {generateListVideos} from "../../services/videosService";
import Videos from "../../components/core/Videos";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(0, 2, 2, 2),
        margin: 'auto'
    },
}));

function SubscriptionsPage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Videos
                title="Today"
                initialVariant="grid"
                onLoad={generateListVideos}
            />
        </main>
    )
}

export default SubscriptionsPage;
