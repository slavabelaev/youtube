import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import AppsMenu from "../menus/AppsMenu";
import PopoverButton from "./PopoverButton";

function AppsPopoverButton() {
	return (
    <PopoverButton
        content={<AppsMenu />}
        tooltip="Приложения"
    >
        <AppsIcon />
    </PopoverButton>
)
}

export default AppsPopoverButton;
