import React from "react";
import List from "@material-ui/core/List";
import VideoItem, {VideoItemProps} from "../VideoItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export interface RecommendationsListProps {
    items?: VideoItemProps[]
}

const generateVideos = (): VideoItemProps[] => Array(10).fill(null).map((item, index) => ({
    title: 'Очень длинный заголовок видеоролика для предстваления',
    linkTo: `/watch?v=${index}`,
    imageUrl: 'https://invalid_url',
    channelName: 'Название канала',
    channelLinkTo: `/channel/${index}`,
    isNew: index % 2 === 0,
    isRecommended: index % 2 === 1,
    views: Math.round(Math.random() * 999999999)
}));

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

const VideosList: React.FC<RecommendationsListProps> = ({ items = generateVideos() }) => {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps, index: number) => (
        <VideoItem
            key={index}
            className={classes.item}
            {...item}
        />
    );

    return (
        <List disablePadding>
            {items.map(renderItem)}
        </List>
    );
};

export default VideosList;
