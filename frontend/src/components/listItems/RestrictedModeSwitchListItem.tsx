import React, {useContext} from "react";
import SwitchListItem from "../common/SwitchListItem";
import SecurityIcon from "@material-ui/icons/Security";
import {RestrictedModeContext} from "../../contexts/RestrictedModeContext";

function RestrictedModeSwitchListItem() {
    const context = useContext(RestrictedModeContext);
    return (
        <SwitchListItem
            title="Restricted mode"
            icon={<SecurityIcon />}
            checked={context?.enabled}
            onChange={(event, checked) => context?.switchEnabled(checked)}
        />
    );
}

export default RestrictedModeSwitchListItem;
