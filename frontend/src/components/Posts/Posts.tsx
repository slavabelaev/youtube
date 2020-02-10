import React from "react";
import Post, {PostProps} from "../Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export interface PostsProps {
    items: PostProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2)
    }
}));

const Posts: React.FC<PostsProps> = ({ items }) => {
    const classes = useStyles();

    const renderItem = (item: PostProps) => (
        <Post
            {...item}
            CardProps={{
                className: classes.item
            }}
        />
    );

    return (
        <div>
            {items.map(renderItem)}
        </div>
    )
};

export default Posts;
