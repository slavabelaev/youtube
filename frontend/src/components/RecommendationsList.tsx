import React from "react";
import {createStyles, List, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MediaBox from "./MediaBox";
import {makeStyles} from "@material-ui/core/styles";
import {toShortString} from "../utils/numbers";

export interface VideoProps {
    title: string;
    imageUrl: string;
    channelName: string;
    views?: number;
    isRecommended?: boolean;
    isNew?: boolean;
}

export interface RecommendationsListProps {
    items?: VideoProps[]
}

const videos: VideoProps[] = Array(10).fill(null).map((item, index) => ({
    title: 'Очень длинный заголовок видеоролика для предстваления',
    imageUrl: '',
    channelName: 'Название канала',
    isNew: index % 2 === 0,
    isRecommended: index % 2 === 1,
    views: Math.round(Math.random() * 999999999)
}));

const useStyles = makeStyles((theme: Theme) => createStyles({
    listItem: {
        alignItems: 'flex-start'
    },
    listItemPrimary: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        fontSize: theme.typography.body2.fontSize
    },
    listItemChannel: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    listItemViews: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    listItemNew: {
        ...theme.typography.caption,
        backgroundColor: theme.palette.grey.A100,
        padding: theme.spacing(.125, .5),
        borderRadius: theme.shape.borderRadius
    },
    listItemRecommended: {
        ...theme.typography.caption,
    },
    mediaBox: {
        flex: 1,
        minWidth: theme.spacing(20),
        height: theme.spacing(13),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1),
    }
}));

const RecommendationsList: React.FC<RecommendationsListProps> = ({ items = videos }) => {
    const classes = useStyles();

    const renderItem = (item: VideoProps) => (
        <ListItem disableGutters className={classes.listItem}>
            <MediaBox
                className={classes.mediaBox}
                imageUrl={item.imageUrl}
            />
            <ListItemText
                primary={
                    <span className={classes.listItemPrimary}>
                        {item.title}
                    </span>
                }
                secondary={
                    <>
                        {item.channelName ? (
                            <div className={classes.listItemChannel}>
                                {item.channelName}
                            </div>
                        ) : null}
                        {item.views ? (
                            <div className={classes.listItemViews}>
                                {toShortString(item.views)} просмотров
                            </div>
                        ) : null}
                        {item.isNew ? (
                            <span className={classes.listItemNew}>
                                Новинка
                            </span>
                        ) : null}
                        {item.isRecommended ? (
                            <span className={classes.listItemRecommended}>
                                Рекомендуется для вас
                            </span>
                        ) : null}
                    </>
                }
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );

    return (
        <List disablePadding>
            {items.map(renderItem)}
        </List>
    );
};

export default RecommendationsList;
