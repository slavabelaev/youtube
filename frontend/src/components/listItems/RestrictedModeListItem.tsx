import React, {useContext} from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {RestrictedModeContext} from "../../contexts/RestrictedModeContext";

export interface RestrictedModeListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function RestrictedModeListItem({ onClick }: RestrictedModeListItemProps) {
    const context = useContext(RestrictedModeContext);
    const statusText = context?.enabled ? 'On' : 'Off';
    return (
        <MenuListItem
            title={`Restricted mode: ${statusText}`}
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default RestrictedModeListItem;
