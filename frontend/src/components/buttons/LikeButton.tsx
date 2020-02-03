import React from "react";
import ToggleCountButton, {ToggleCountButtonProps} from "./ToggleCountButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {Tooltip} from "@material-ui/core";

export interface LikeButtonProps extends ToggleCountButtonProps {}

const LikeButton: React.FC<LikeButtonProps> = (props) => (
    <Tooltip title="Мне понравилось">
        <ToggleCountButton
            {...props}
            icon={<ThumbUpIcon />}
        />
    </Tooltip>
);

export default LikeButton;
