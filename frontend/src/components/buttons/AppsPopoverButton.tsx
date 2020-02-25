import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import AppsMenu from "../menus/AppsMenu";
import PopoverButton from "./PopoverButton";

function AppsPopoverButton() {
	return (
    <PopoverButton
        renderContent={() => <AppsMenu />}
        tooltip="Apps"
    >
        <AppsIcon />
    </PopoverButton>
)
}

export default AppsPopoverButton;
