import React, {ReactNode} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {formatDistance} from "date-fns";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {AvatarProps, ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import VideoThumbnail, {VideoThumbnailProps} from "./VideoThumbnail";
import {toStringNumber} from "../../../utils/numbers";
import VideoPopoverButton from "./VideoPopoverButton";
import Tooltip from "@material-ui/core/Tooltip";

export interface VideoItemBaseProps {
    variant?: 'horizontal' | 'vertical',
    className?: string;
}

export interface VideoItemProps extends VideoItemBaseProps {
    primaryText: ReactNode;
    primaryTextTo: string;
    durationSeconds: VideoThumbnailProps['durationSeconds'];
    imageSrc: string;
    secondaryText: ReactNode;
    secondaryTextTo: string;
    avatarSrc?: AvatarProps['src'];
    views?: number;
    captionText?: ReactNode;
    labelText?: ReactNode;
    showCheckIcon?: boolean;
    createdAt?: Date;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    root_variant_vertical: {
        flexDirection: 'column',
        alignItems: 'initial'
    },
    listItem: {
        alignItems: 'flex-start',
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    container: {
        listStyle: 'none',
        display: 'block',
        width: '100%',
        overflow: 'hidden'
    },
    listItemText: {
        marginTop: 0,
        marginBottom: 0
    },
    primaryText: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        textDecoration: 'none',
        lineHeight: 1.25,
        marginBottom: theme.spacing(.5)
    },
    secondaryText: {
        display: 'block',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none'
    },
    checkIcon: {
        marginLeft: theme.spacing(.5),
        verticalAlign: 'middle'
    },
    views: {
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    labelText: {
        ...theme.typography.caption,
        backgroundColor: theme.palette.grey.A100,
        color: theme.palette.grey.A400,
        padding: theme.spacing(.125, .5),
        borderRadius: theme.shape.borderRadius
    },
    captionText: {
        display: 'block',
        ...theme.typography.caption,
    },
    createdAt: {
        display: 'block'
    },
    media: {
        flex: 1,
        minWidth: theme.spacing(20),
        maxWidth: theme.spacing(20),
        height: theme.spacing(13),
    },
    media_variant_vertical: {
        minWidth: 'initial',
        maxWidth: 'initial',
        minHeight: theme.spacing(20),
        marginBottom: theme.spacing(2)
    },
    media_variant_horizontal: {
        marginRight: theme.spacing(2),
    }
}));

function VideoItem({
    variant = 'horizontal',
    primaryText,
    durationSeconds,
    primaryTextTo,
    imageSrc,
    secondaryText,
    avatarSrc,
    secondaryTextTo,
    views,
    labelText,
    captionText,
    createdAt,
    showCheckIcon,
    className,
}: VideoItemProps) {
    const classes = useStyles();

    const primary = primaryText ? (
        <Typography
            className={classes.primaryText}
            variant="body1"
            color="inherit"
            component={Link}
            to={primaryTextTo}
        >
            {primaryText}
        </Typography>
    ) : null;

    const checkIcon = showCheckIcon ? (
        <Tooltip
            title="Verified"
        >
            <CheckCircleIcon
                className={classes.checkIcon}
                fontSize="inherit"
            />
        </Tooltip>
    ) : null;

    const secondary = secondaryText ? (
        <Typography
            className={classes.secondaryText}
            variant="inherit"
            color="inherit"
            component={Link}
            to={secondaryTextTo}
        >
            {secondaryText}
            {checkIcon}
        </Typography>
    ) : null;

    const avatar = variant === 'vertical' && avatarSrc ? (
        <ListItemAvatar>
            <Avatar
                src={avatarSrc || ''}
                component={Link}
                to={secondaryTextTo}
            />
        </ListItemAvatar>
    ) : null;

    const viewsNode = views ? (
        <span className={classes.views}>
            {toStringNumber(views)} views
        </span>
    ) : null;

    const labelTextNode = labelText ?(
        <span className={classes.labelText}>
            {labelText}
        </span>
    ) : null;

    const captionTextNode = captionText ? (
        <span className={classes.captionText}>
            {captionText}
        </span>
    ) : null;

    const createdAtNode = variant === 'vertical' && createdAt ? (
        <span className={classes.createdAt}>
            {formatDistance(new Date(), createdAt)}
        </span>
    ) : null;

    const videoThumbnail = imageSrc ? (
        <VideoThumbnail
            className={clsx(
                classes.media, {
                [classes.media_variant_vertical]: variant === 'vertical',
                [classes.media_variant_horizontal]: variant === 'horizontal'
            })}
            src={imageSrc}
            to={primaryTextTo}
            durationSeconds={durationSeconds}
        />
    ) : null;

    const listItemText = (
        <ListItemText
            className={classes.listItemText}
            primary={primary}
            secondary={
                <>
                    {secondary}
                    {viewsNode}
                    {labelTextNode}
                    {captionTextNode}
                    {createdAtNode}
                </>
            }
        />
    );

    return (
        <div
            className={clsx(
                className,
                classes.root, {
                [classes.root_variant_vertical]: variant === 'vertical'
            })}
        >
            {videoThumbnail}
            <ListItem
                className={classes.listItem}
                ContainerProps={{
                    className: classes.container
                }}
            >
                {avatar}
                {listItemText}
                <ListItemSecondaryAction>
                    <VideoPopoverButton
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}

export default VideoItem;
