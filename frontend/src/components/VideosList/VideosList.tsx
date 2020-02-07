import React from "react";
import List from "@material-ui/core/List";
import VideoItem, {VideoItemProps} from "../VideoItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export interface RecommendationsListProps {
    items: VideoItemProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

const VideosList: React.FC<RecommendationsListProps> = ({ items }) => {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps) => (
        <VideoItem
            key={item.id}
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
