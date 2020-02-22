import React from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {formatDistance} from "date-fns";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import VideoThumbnail from "./VideoThumbnail";
import {toStringNumber} from "../../../utils/numbers";
import VideoPopoverButton from "./VideoPopoverButton";
import Tooltip from "@material-ui/core/Tooltip";

export interface VideoModel {
    id: string;
    title: string;
    duration: number;
    linkTo: string;
    imageSrc: string;
    channelName: string;
    channelLinkTo: string;
    channelImageUrl?: string | null;
    views?: number;
    isRecommended?: boolean;
    isNew?: boolean;
    verified?: boolean;
    createdAt: Date;
}

export interface VideoItemProps extends VideoModel {
    variant?: 'horizontal' | 'vertical',
    className?: string;
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
    listItemTextNode: {
        marginTop: 0,
        marginBottom: 0
    },
    title: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        textDecoration: 'none',
        lineHeight: 1.25,
        marginBottom: theme.spacing(.5)
    },
    channelName: {
        display: 'block',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none'
    },
    verificationIcon: {
        marginLeft: theme.spacing(.5),
        verticalAlign: 'middle'
    },
    views: {
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    isNew: {
        ...theme.typography.caption,
        backgroundColor: theme.palette.grey.A100,
        color: theme.palette.grey.A400,
        padding: theme.spacing(.125, .5),
        borderRadius: theme.shape.borderRadius
    },
    isRecommended: {
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
    title,
    duration,
    linkTo,
    imageSrc,
    channelName,
    channelImageUrl,
    channelLinkTo,
    views,
    isNew,
    isRecommended,
    createdAt,
    verified,
    className,
}: VideoItemProps) {
    const classes = useStyles();

    const titleNode = title ? (
        <Typography
            className={classes.title}
            variant="body1"
            color="inherit"
            component={Link}
            to={linkTo}
        >
            {title}
        </Typography>
    ) : null;

    const verificationIcon = verified ? (
        <Tooltip
            title="Подтверждено"
        >
            <CheckCircleIcon
                className={classes.verificationIcon}
                fontSize="inherit"
            />
        </Tooltip>
    ) : null;

    const channelNameNode = channelName ? (
        <Typography
            className={classes.channelName}
            variant="inherit"
            color="inherit"
            component={Link}
            to={channelLinkTo}
        >
            {channelName}
            {verificationIcon}
        </Typography>
    ) : null;

    const channelAvatarNode = variant === 'vertical' && channelImageUrl ? (
        <ListItemAvatar>
            <Avatar
                src={channelImageUrl || ''}
                component={Link}
                to={channelLinkTo}
            />
        </ListItemAvatar>
    ) : null;

    const viewsNode = views ? (
        <span className={classes.views}>
            {toStringNumber(views)} просмотров
        </span>
    ) : null;

    const isNewNode = isNew ?(
        <span className={classes.isNew}>
            Новинка
        </span>
    ) : null;

    const isRecommendedNode = isRecommended ? (
        <span className={classes.isRecommended}>
            Рекомендуется для вас
        </span>
    ) : null;

    const createdAtNode = createdAt && variant === 'vertical' ? (
        <span className={classes.createdAt}>
            {formatDistance(new Date(), createdAt)}
        </span>
    ) : null;

    const mediaNode = imageSrc ? (
        <VideoThumbnail
            className={clsx(
                classes.media, {
                [classes.media_variant_vertical]: variant === 'vertical',
                [classes.media_variant_horizontal]: variant === 'horizontal'
            })}
            src={imageSrc}
            to={linkTo}
            duration={duration}
        />
    ) : null;

    const listItemTextNode = (
        <ListItemText
            className={classes.listItemTextNode}
            primary={titleNode}
            secondary={
                <>
                    {channelNameNode}
                    {viewsNode}
                    {isNewNode}
                    {isRecommendedNode}
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
            {mediaNode}
            <ListItem
                className={classes.listItem}
                ContainerProps={{
                    className: classes.container
                }}
            >
                {channelAvatarNode}
                {listItemTextNode}
                <ListItemSecondaryAction>
                    <VideoPopoverButton
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}

export default VideoItem;
