import React from "react";
import ToggleCountButton, {ToggleCountButtonProps} from "./ToggleCountButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {Tooltip} from "@material-ui/core";

export interface DislikeButtonProps extends ToggleCountButtonProps {}

const DislikeButton: React.FC<DislikeButtonProps> = (props) => (
    <Tooltip title="Мне не понравилось">
        <ToggleCountButton
            {...props}
            icon={<ThumbDownIcon fontSize={props.size === 'small' ? 'small' : 'default'} />}
        />
    </Tooltip>
);

export default DislikeButton;
