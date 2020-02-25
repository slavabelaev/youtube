import React from "react";
import PopoverButton from "../../buttons/PopoverButton";
import List from "@material-ui/core/List";
import ReportListItem from "../../listItems/ReportListItem";

function CommentPopoverButton() {
    const renderContent = () => (
        <List>
            <ReportListItem/>
        </List>
    );

    return (
        <PopoverButton
            edge="end"
            renderContent={renderContent}
        />
    )
}

export default CommentPopoverButton;
