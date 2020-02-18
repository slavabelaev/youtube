import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import Video, {VideoProps} from "./Video";
import LoadList, {LoadListProps} from "../common/LoadList";

export interface VideosGridProps {
    onLoad: LoadListProps['onLoad'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        margin: 0
    }
}));

const VideosGrid: React.FC<VideosGridProps> = ({ onLoad }) => {
    const classes = useStyles();

    const renderItem = (item: VideoProps) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.id}>
            <Video
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
            <LoadList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </Grid>
    )
};

export default VideosGrid;
