import React from "react";
import Post, {PostProps} from "./Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Items, {ItemsProps} from "../common/Items";
import Answers from "../Comments/Answers";

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

    const renderItem = (item: PostProps) => (
        <div className={classes.item}>
            <Post
                {...item}
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
