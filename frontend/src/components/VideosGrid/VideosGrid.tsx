import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import VideoItem, {VideoItemProps} from "../VideoItem";

export interface VideosGridProps {
    items?: VideoItemProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    }
}));

const generateVideos = (): VideoItemProps[] => Array(10).fill(null).map((item, index) => ({
    title: 'Очень длинный заголовок видеоролика для предстваления',
    linkTo: `/watch?v=${index}`,
    imageUrl: 'https://invalid_url',
    channelImageUrl: null,
    channelName: 'Название канала',
    channelLinkTo: `/channel/${index}`,
    views: Math.round(Math.random() * 999999999),
    createdAt: new Date(),
    variant: 'vertical'
}));

const VideosGrid: React.FC<VideosGridProps> = ({ items = generateVideos() }) => {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps, index: number) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
            <VideoItem {...item} />
        </Grid>
    );

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {items.map(renderItem)}
            </Grid>
        </div>
    )
};

export default VideosGrid;
