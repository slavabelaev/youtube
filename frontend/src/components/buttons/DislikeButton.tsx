import React from "react";
import ToggleCountButton, {ToggleCountButtonProps} from "./ToggleCountButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export interface DislikeButtonProps extends ToggleCountButtonProps {}

function DislikeButton(props: DislikeButtonProps) {
    return (
        <ToggleCountButton
            {...props}
            icon={<ThumbDownIcon fontSize={props.size === 'small' ? 'small' : 'default'}/>}
        />
    )
}

export default DislikeButton;
