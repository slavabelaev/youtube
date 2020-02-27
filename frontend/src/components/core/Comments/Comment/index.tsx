import React from "react";
import Component, {CommentBaseProps} from "./Comment";
import {CommentModel} from "../../../../models/CommentModel";
import {CHANNEL_PAGE_ROUTE} from "../../../../pages/ChannelPage";

export interface CommentProps extends CommentBaseProps, CommentModel {}

function Comment({
    id,
    avatarUrl,
    userName,
    text,
    createdAt,
    likes,
    dislikes,
    liked,
    verified,
    edited,
    ...otherProps
}: CommentProps) {
    const channelPageTo = CHANNEL_PAGE_ROUTE.replace(':id', id);
    return (
        <Component
            {...otherProps}
            avatarSrc={avatarUrl}
            avatarTo={channelPageTo}
            title={userName}
            titleTo={channelPageTo}
            text={text}
            createdAt={createdAt}
            initialLikes={likes}
            initialDislikes={dislikes}
            initialChecked={liked ? 'like' : (liked === false) ? 'dislike' : 'none'}
            edited={edited}
            verified={verified}
        />
    )
}

export default Comment;
