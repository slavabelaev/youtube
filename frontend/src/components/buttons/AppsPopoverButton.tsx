import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import AppsMenu from "../menus/AppsMenu";
import PopoverButton from "./PopoverButton";

const AppsPopoverButton: React.FC = () => (
    <PopoverButton
        content={<AppsMenu />}
        tooltip="Приложения"
    >
        <AppsIcon />
    </PopoverButton>
);

export default AppsPopoverButton;
