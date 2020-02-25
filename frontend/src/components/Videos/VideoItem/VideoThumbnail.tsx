import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import Button from "@material-ui/core/Button";
import {CreateCSSProperties} from "@material-ui/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import SaveToPlaylistTrigger from "../../triggers/SaveToPlaylistTrigger";
import SnackbarTrigger from "../../triggers/SnackbarTrigger";

const useStyles = makeStyles((theme: Theme) => {
    const buttonProps: CreateCSSProperties = {
        position: 'absolute',
        right: theme.spacing(1),
        backgroundColor: theme.palette.grey["900"],
        color: theme.palette.common.white,
        minWidth: 'auto',
    };

    const fullSizeProps: CreateCSSProperties = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto'
    };

    return createStyles({
        root: {
            position: 'relative',
            height: 104,
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
            backgroundColor: theme.palette.grey["800"],
            color: theme.palette.common.white,
            '&:not(:hover) [aria-label="button"]': {
                display: 'none'
            }
        },
        link: {
            ...fullSizeProps
        },
        image: {
            ...fullSizeProps,
            width: '100%',
        },
        playArrowIcon: {
            color: theme.palette.common.white,
            ...fullSizeProps,
        },
        timeStatus: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            padding: theme.spacing(.125, .5),
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.grey["900"],
            color: theme.palette.common.white
        },
        watchLater: {
            ...buttonProps,
            top: theme.spacing(1),
        },
        SaveToPlaylistTrigger: {
            ...buttonProps,
            top: theme.spacing(5.25),
        }
    });
});

export interface VideoThumbnailProps {
    src: string;
    to: string;
    durationSeconds: number;
    className?: string;
    [key: string]: any;
}

function VideoThumbnail({
    src,
    to,
    durationSeconds,
    className,
    style,
    ...otherProps
}: VideoThumbnailProps) {
    const classes = useStyles();

    const timeStatus = (
        <Typography
            className={classes.timeStatus}
            variant="caption"
            component="span"
        >
            {new Date(durationSeconds).toLocaleTimeString().substring(3)}
        </Typography>
    );

    const saveToWatchLaterButton = (
        <SnackbarTrigger
            message={'Saved to "Watch later"'}
            renderTrigger={onClick => (
                <Tooltip
                    title="Watch later"
                    placement="left"
                >
                    <Button
                        className={classes.watchLater}
                        size="small"
                        aria-label="button"
                        onClick={onClick}
                    >
                        <WatchLaterIcon
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
            )}
        />
    );

    const saveToPlaylistTrigger = (
        <SaveToPlaylistTrigger
            renderTrigger={onClick => (
                <Tooltip
                    title="Save to playlist"
                    placement="left"
                    aria-label="button"
                >
                    <Button
                        className={classes.SaveToPlaylistTrigger}
                        size="small"
                        onClick={onClick}
                    >
                        <PlaylistPlayIcon
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
            )}
        />
    );

    const preview = (
        <Link
            className={classes.link}
            to={to}
        >
            <img
                className={classes.image}
                src={src}
                alt=""
            />
            <PlayArrowIcon
                fontSize="large"
                aria-label="button"
                className={classes.playArrowIcon}
            />
        </Link>
    );

    return (
        <div className={clsx(classes.root, className)}>
            {preview}
            {saveToWatchLaterButton}
            {saveToPlaylistTrigger}
            {timeStatus}
        </div>
    )
}

export default VideoThumbnail;
