import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import {ToggleCountButtonProps} from "./ToggleCountButton";

export interface LikeDislikeButtonProps {
    initialLikes?: ToggleCountButtonProps['value'];
    initialDislikes?: ToggleCountButtonProps['value'];
    initialChecked?: 'like' | 'dislike' | 'none';
}

const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({
    initialLikes = 0,
    initialDislikes = 0,
    initialChecked = 'none'
}) => {
    const [{ likes, dislikes, checked }, setState] = React.useState({
        likes: initialLikes,
        dislikes: initialDislikes,
        checked: initialChecked
    });
    return (
        <>
            <LikeButton
                value={likes}
                checked={checked === 'like'}
                onClick={() => setState({
                    likes: initialLikes + 1,
                    dislikes: initialDislikes,
                    checked: 'like'
                })}
            />
            <DislikeButton
                value={dislikes}
                checked={checked === 'dislike'}
                onClick={() => setState({
                    likes: initialLikes,
                    dislikes: initialDislikes + 1,
                    checked: 'dislike'
                })}
            />
        </>
    );
};

export default LikeDislikeButton;
