import React from "react";
import {List, ListProps} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";

export interface CommentsProps {
    items: CommentProps[];
    listProps?: ListProps;
}

const Comments: React.FC<CommentsProps> = ({
    items,
    listProps,
}) => {
    const renderItem = (item: CommentProps) => (
        <Comment {...item} key={item.id} />
    );

    return (
        <List {...listProps}>
            {items.map(renderItem)}
        </List>
    )
};

export default Comments;
