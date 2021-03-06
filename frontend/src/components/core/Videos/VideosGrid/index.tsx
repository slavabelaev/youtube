import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import VideoItem, {VideoItemProps} from "../VideoItem";
import Items, {ItemsProps} from "../../../common/Items";

export interface VideosGridProps {
    onLoad: ItemsProps['onLoad'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        margin: 0
    }
}));

function VideosGrid({ onLoad }: VideosGridProps) {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.id}>
            <VideoItem
                {...item}
                variant="vertical"
            />
        </Grid>
    );

    return (
        <Grid
            className={classes.root}
            container
            spacing={2}
        >
            <Items
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </Grid>
    )
}

export default VideosGrid;
