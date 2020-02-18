import React from "react";
import CommentMenu from "./CommentMenu";
import PopoverButton from "../buttons/PopoverButton";

const CommentPopoverButton: React.FC = () => (
    <PopoverButton
        edge="end"
        content={<CommentMenu />}
    />
);

export default CommentPopoverButton;
