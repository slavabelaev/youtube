import React from "react";
import {List} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";
import LoadList, {LoadListProps} from "../LoadList";
import Answers from "./Answers";

export interface CommentsProps {
    onLoad: LoadListProps<CommentProps>['onLoad'];
}

const Comments: React.FC<CommentsProps> = ({
    onLoad
}) => {
    const renderItem = (item: CommentProps) => (
        <>
            <Comment {...item} key={item.id} />
            <Answers commentId={item.id} />
        </>
    );

    return (
        <List>
            <LoadList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    )
};

export default Comments;
