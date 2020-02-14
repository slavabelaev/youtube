import React from "react";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Media from "./Media";
import {toStringNumber} from "../utils/numbers";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

export interface VideoItemProps {
    id: string;
    title: string;
    linkTo: string;
    imageUrl: string;
    channelName: string;
    channelLinkTo: string;
    channelImageUrl?: string | null;
    views?: number;
    isRecommended?: boolean;
    isNew?: boolean;
    createdAt?: Date;
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
        padding: theme.spacing(0)
    },
    container: {
        listStyle: 'none',
        width: '100%'
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
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none'
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
        padding: theme.spacing(.125, .5),
        borderRadius: theme.shape.borderRadius
    },
    isRecommended: {
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

const VideoItem: React.FC<VideoItemProps> = ({
    variant = 'horizontal',
    title,
    linkTo,
    imageUrl,
    channelName,
    channelImageUrl,
    channelLinkTo,
    views,
    isNew,
    isRecommended,
    createdAt,
    className,
}) => {
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
    
    const channelNameNode = channelName ? (
        <Typography
            className={classes.channelName}
            variant="inherit"
            color="inherit"
            component={Link}
            to={channelLinkTo}
        >
            {channelName}
        </Typography>
    ) : null;

    const channelAvatarNode = channelImageUrl !== undefined ? (
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

    const createdAtNode = createdAt ? (
        <span className={classes.createdAt}>
            12 минут назад
        </span>
    ) : null;

    const mediaNode = imageUrl ? (
        <Media
            className={clsx(
                classes.media, {
                [classes.media_variant_vertical]: variant === 'vertical',
                [classes.media_variant_horizontal]: variant === 'horizontal'
            })}
            imageUrl={imageUrl}
            component={Link}
            to={linkTo}
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
                    <IconButton edge="end">
                        <MoreVertIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};

export default VideoItem;
