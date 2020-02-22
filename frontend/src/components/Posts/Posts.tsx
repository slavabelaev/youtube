import React from "react";
import Post, {PostProps} from "./Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../common/LoadList";
import Answers from "../Comments/Answers";

export interface PostsProps {
    onLoad: LoadListProps['onLoad']
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
                    <Answers commentId={item.id} />
                }
            />
        </div>
    );

    return (
        <LoadList
            renderItem={renderItem}
            onLoad={onLoad}
        />
    )
};

export default Posts;
