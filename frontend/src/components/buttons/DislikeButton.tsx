import React from "react";
import ToggleCountButton, {ToggleCountButtonProps} from "./ToggleCountButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export interface DislikeButtonProps extends ToggleCountButtonProps {}

const DislikeButton: React.FC<DislikeButtonProps> = (props) => (
    <ToggleCountButton
        {...props}
        icon={<ThumbDownIcon />}
    />
);

export default DislikeButton;
