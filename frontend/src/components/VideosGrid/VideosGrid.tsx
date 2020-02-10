import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import VideoItem, {VideoItemProps} from "../VideoItem";

export interface VideosGridProps {
    items: VideoItemProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        margin: 0
    }
}));

const VideosGrid: React.FC<VideosGridProps> = ({ items }) => {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.id}>
            <VideoItem {...item} />
        </Grid>
    );

    return (
        <Grid
            className={classes.root}
            container
            spacing={2}
        >
            {items.map(renderItem)}
        </Grid>
    )
};

export default VideosGrid;
