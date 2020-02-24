import React from "react";
import SwitchListItem from "../common/SwitchListItem";
import SecurityIcon from "@material-ui/icons/Security";

function RestrictedModeSwitchListItem() {
    return (
        <SwitchListItem
            title="Restricted mode"
            icon={<SecurityIcon />}
        />
    );
}

export default RestrictedModeSwitchListItem;
