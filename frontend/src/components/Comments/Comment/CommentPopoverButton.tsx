import React from "react";
import CommentMenu from "./CommentMenu";
import PopoverButton from "../../buttons/PopoverButton";

function CommentPopoverButton() {
	return (
    <PopoverButton
        edge="end"
        content={<CommentMenu />}
    />
)
}

export default CommentPopoverButton;
