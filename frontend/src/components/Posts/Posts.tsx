import React from "react";
import Post, {PostProps} from "../Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../LoadList";

export interface PostsProps {
    onLoad: LoadListProps['onLoad']
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    item: {
        marginBottom: theme.spacing(2)
    }
}));

const Posts: React.FC<PostsProps> = ({ onLoad }) => {
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
        <LoadList
            renderItem={renderItem}
            onLoad={onLoad}
        />
    )
};

export default Posts;
