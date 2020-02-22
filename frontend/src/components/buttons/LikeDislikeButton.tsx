import React from "react";
import LikeButton, {LikeButtonProps} from "./LikeButton";
import DislikeButton from "./DislikeButton";
import {ToggleCountButtonProps} from "./ToggleCountButton";
import {IconButtonProps} from "@material-ui/core";

export interface LikeDislikeButtonProps {
    initialLikes?: ToggleCountButtonProps['value'];
    initialDislikes?: ToggleCountButtonProps['value'];
    initialChecked?: 'like' | 'dislike' | 'none';
    LikeButtonProps?: Partial<LikeButtonProps>;
    DislikeButtonProps?: Partial<IconButtonProps>;
}

function LikeDislikeButton({
    initialLikes = 0,
    initialDislikes = 0,
    initialChecked = 'none',
    LikeButtonProps,
    DislikeButtonProps
}: LikeDislikeButtonProps) {
    const [{ likes, dislikes, checked }, setState] = React.useState({
        likes: initialLikes,
        dislikes: initialDislikes,
        checked: initialChecked
    });
    const handleCheck = (checked: LikeDislikeButtonProps['initialChecked'] = 'none') => () => setState({
        likes: initialLikes + (checked === 'like' ? 1 : 0),
        dislikes: initialDislikes + (checked === 'dislike' ? 1 : 0),
        checked: checked
    });

    return (
        <>
            <LikeButton
                {...LikeButtonProps}
                value={likes}
                checked={checked === 'like'}
                onClick={handleCheck('like')}
            />
            <DislikeButton
                {...DislikeButtonProps}
                value={dislikes}
                checked={checked === 'dislike'}
                onClick={handleCheck('dislike')}
            />
        </>
    );
};

export default LikeDislikeButton;
