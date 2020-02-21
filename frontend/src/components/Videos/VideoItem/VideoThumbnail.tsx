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
        addToPlaylistsButton: {
            ...buttonProps,
            top: theme.spacing(5.25),
        }
    });
});

export interface VideoThumbnailProps {
    src: string;
    to: string;
    duration: number;
    className?: string;
    [key: string]: any;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
    src,
    to,
    duration,
    className,
    style,
    ...otherProps
}) => {
    const classes = useStyles();

    const timeStatus = (
        <Typography
            className={classes.timeStatus}
            variant="caption"
            component="span"
        >
            {new Date(duration).toLocaleTimeString().substring(3)}
        </Typography>
    );

    const watchLater = (
        <Tooltip
            title="Смотреть позже"
            placement="left"
        >
            <Button
                className={classes.watchLater}
                size="small"
                aria-label="button"
            >
                <WatchLaterIcon
                    fontSize="small"
                />
            </Button>
        </Tooltip>
    );

    const addToPlaylistsButton = (
        <Tooltip
            title="Добавить в плейлист"
            placement="left"
            aria-label="button"
        >
            <Button
                className={classes.addToPlaylistsButton}
                size="small"
            >
                <PlaylistPlayIcon
                    fontSize="small"
                />
            </Button>
        </Tooltip>
    );

    return (
        <div className={clsx(classes.root, className)}>
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
            {watchLater}
            {addToPlaylistsButton}
            {timeStatus}
        </div>
    )
};

export default VideoThumbnail;
