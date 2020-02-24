import React from "react";
import MenuListItem from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";

function KeyboardShortcutsListItem() {
    return (
        <MenuListItem
            title="Keyboard shortcuts"
            icon={<KeyboardIcon />}
            endIcon={<ChevronRightIcon />}
        />
    )
}

export default KeyboardShortcutsListItem;
