import React from "react";
import {createStyles, List, ListProps, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Toolbar from "@material-ui/core/Toolbar";
import LikeDislikeButton, {LikeDislikeButtonProps} from "../buttons/LikeDislikeButton";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface Comment {
    avatarUrl: string;
    userName: string;
    text: string;
    createdAt: Date;
    initialLikes: LikeDislikeButtonProps['initialLikes'];
    initialDislikes: LikeDislikeButtonProps['initialDislikes'];
    initialChecked: LikeDislikeButtonProps['initialChecked'];
    edited: boolean;
}

export interface CommentsProps {
    items: Comment[];
    listProps?: ListProps;
    listItemProps?: {
        className: string;
    };
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        padding: theme.spacing(0, 0, 0, 7),
        minHeight: 'auto'
    },
    userName: {
        marginRight: theme.spacing(2)
    }
}));

const Comments: React.FC<CommentsProps> = ({
    items,
    listProps,
    listItemProps
}) => {
    const classes = useStyles();
    const renderItem = (item: Comment, index: number) => (
        <div key={index}>
            <ListItem
                {...listItemProps}
                disableGutters
                alignItems="flex-start"
            >
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <>
                            <Typography
                                className={classes.userName}
                                variant="inherit"
                                component="span"
                            >
                                {item.userName}
                            </Typography>
                            <Typography
                                variant="caption"
                                component="span"
                            >
                                {item.createdAt.toLocaleDateString()}
                                {item.edited ? ' (изменено)' : null}
                            </Typography>
                        </>
                    }
                    secondary={item.text}
                />
                <ListItemSecondaryAction>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Toolbar className={classes.toolbar}>
                <LikeDislikeButton
                    initialLikes={item.initialLikes}
                    initialDislikes={item.initialDislikes}
                    initialChecked={item.initialChecked}
                    LikeButtonProps={{
                        size: 'small'
                    }}
                    DislikeButtonProps={{
                        size: 'small'
                    }}
                />
                <Button
                    variant="text"
                    color="inherit"
                    size="small"
                >
                    Ответить
                </Button>
            </Toolbar>
            <Toolbar className={classes.toolbar}>
                <Button
                    size="small"
                    color="secondary"
                    startIcon={<ArrowDropDownIcon />}
                >
                    Показать 5 ответов
                </Button>
            </Toolbar>
        </div>
    );

    return (
        <List {...listProps}>
            {items.map(renderItem)}
        </List>
    )
};

export default Comments;
