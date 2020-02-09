import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import LikeDislikeButton, {LikeDislikeButtonProps} from "../buttons/LikeDislikeButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";

export interface CommentProps {
    id: string;
    avatarUrl: string;
    userName: string;
    text: string;
    createdAt: Date;
    initialLikes: LikeDislikeButtonProps['initialLikes'];
    initialDislikes: LikeDislikeButtonProps['initialDislikes'];
    initialChecked: LikeDislikeButtonProps['initialChecked'];
    edited: boolean;
}

export const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        padding: theme.spacing(0, 0, 0, 7),
        minHeight: 'auto'
    },
    userName: {
        marginRight: theme.spacing(2)
    }
}));

const Comment: React.FC<CommentProps> = (props) => {
    const classes = useStyles();

    const listItem = (
        <ListItem
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
                            {props.userName}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="span"
                        >
                            {props.createdAt.toLocaleDateString()}
                            {props.edited ? ' (изменено)' : null}
                        </Typography>
                    </>
                }
                secondary={props.text}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );

    const toolbar = (
        <Toolbar className={classes.toolbar}>
            <LikeDislikeButton
                initialLikes={props.initialLikes}
                initialDislikes={props.initialDislikes}
                initialChecked={props.initialChecked}
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
    );

    const answersToolbar = (
        <Toolbar className={classes.toolbar}>
            <Button
                size="small"
                color="secondary"
                startIcon={<ArrowDropDownIcon />}
            >
                Показать 5 ответов
            </Button>
        </Toolbar>
    );

    return (
        <div>
            {listItem}
            {toolbar}
            {answersToolbar}
        </div>
    )
};

export default Comment;
