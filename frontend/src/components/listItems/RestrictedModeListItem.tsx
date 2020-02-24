import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export interface RestrictedModeListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function RestrictedModeListItem({ onClick }: RestrictedModeListItemProps) {
    return (
        <MenuListItem
            title="Restricted mode: off"
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default RestrictedModeListItem;
