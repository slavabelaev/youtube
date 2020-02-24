import React from "react";
import Post from "./Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Items, {ItemsProps} from "../common/Items";
import Answers from "../Comments/Answers";
import {PostModel} from "../../models/PostModel";

export interface PostsProps {
    onLoad: ItemsProps['onLoad']
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2)
    }
}));

function Posts({ onLoad }: PostsProps) {
    const classes = useStyles();

    const renderItem = (item: PostModel) => (
        <div
            className={classes.item}
            key={item.id}
        >
            <Post
                title={item.title}
                avatarSrc={item.avatarUrl}
                createdAt={item.createdAt.toLocaleDateString()}
                text={item.text}
                initialLikes={item.likes}
                initialDislikes={item.dislikes}
                initialChecked={item.liked ? 'like' : item.disliked ? 'dislike' : 'none'}
                bottomToolbar={
                    <Answers />
                }
            />
        </div>
    );

    return (
        <Items
            renderItem={renderItem}
            onLoad={onLoad}
        />
    )
}

export default Posts;
