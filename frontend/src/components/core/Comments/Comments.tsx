import React from "react";
import {List} from "@material-ui/core";
import Comment, {CommentProps} from "./Comment";
import Items, {ItemsProps} from "../../common/Items";
import Answers from "./Answers";

export interface CommentsProps {
    onLoad: ItemsProps<CommentProps>['onLoad'];
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
            <Items
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    )
}

export default Comments;
