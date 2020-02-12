import React from "react";
import {List} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";
import LoadMoreList, {LoadMoreListProps} from "../LoadMoreList";

export interface CommentsProps {
    onLoad: LoadMoreListProps<CommentProps>['onLoad'];
}

const Comments: React.FC<CommentsProps> = ({
    onLoad
}) => {
    const renderItem = (item: CommentProps) => (
        <Comment {...item} key={item.id} />
    );

    return (
        <List>
            <LoadMoreList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    )
};

export default Comments;
