import React from "react";
import {List} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";
import LoadList, {LoadListProps} from "../common/LoadList";
import Answers from "./Answers";

export interface CommentsProps {
    onLoad: LoadListProps<CommentProps>['onLoad'];
    variant?: CommentProps['variant'];
}

function Comments({
    onLoad,
    variant = 'normal'
}: CommentsProps) {
    const renderItem = (item: CommentProps) => (
        <div key={item.id}>
            <Comment
                variant={variant}
                {...item}
            />
            <Answers />
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
}

export default Comments;
