import React from "react";
import List from "@material-ui/core/List";
import VideoItem, {VideoItemProps} from "../VideoItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoadMoreList, {LoadMoreListProps} from "../LoadMoreList";

export interface RecommendationsListProps {
    onLoad: LoadMoreListProps<VideoItemProps>['onLoad'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

const VideosList: React.FC<RecommendationsListProps> = ({ onLoad }) => {
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
            <LoadMoreList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    );
};

export default VideosList;
