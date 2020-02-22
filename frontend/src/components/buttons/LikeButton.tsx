import React from "react";
import ToggleCountButton, {ToggleCountButtonProps} from "./ToggleCountButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export interface LikeButtonProps extends ToggleCountButtonProps {}

function LikeButton(props: LikeButtonProps) {
    return (
        <ToggleCountButton
            {...props}
            icon={<ThumbUpIcon fontSize={props.size === 'small' ? 'small' : 'default'}/>}
        />
    )
}

export default LikeButton;
