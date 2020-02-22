import React from "react";
import List from "@material-ui/core/List";
import VideoItem, {VideoItemProps} from "./VideoItem";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../common/LoadList";

export interface RecommendationsListProps {
    onLoad: LoadListProps<VideoItemProps>['onLoad'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

function VideosList({ onLoad }: RecommendationsListProps) {
    const classes = useStyles();

    const renderItem = (item: VideoItemProps) => (
        <VideoItem
            key={item.id}
            className={classes.item}
            {...item}
        />
    );

    return (
        <List
            component="div"
            disablePadding
        >
            <LoadList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    );
};

export default VideosList;
