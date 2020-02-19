import React from "react";
import {List} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";
import LoadList, {LoadListProps} from "../common/LoadList";
import Answers from "./Answers";

export interface CommentsProps {
    onLoad: LoadListProps<CommentProps>['onLoad'];
}

const Comments: React.FC<CommentsProps> = ({
    onLoad
}) => {
    const renderItem = (item: CommentProps) => (
        <div key={item.id}>
            <Comment {...item} />
            <Answers commentId={item.id} />
        </div>
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
