import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface VideoPlayerProps {
    width?: number,
    height?: number
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.grey["800"],
        borderRadius: theme.shape.borderRadius
    }
}));

const VideoPlayer: React.FC<VideoPlayerProps> = ({ width, height }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.root}
            style={{
                width: width,
                height: height
            }}
        />
    )
};

export default VideoPlayer;
