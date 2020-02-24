import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export interface SwitchAccountListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function SwitchAccountListItem({ onClick }: SwitchAccountListItemProps) {
    return (
        <MenuListItem
            title="Switch account"
            icon={<RecentActorsIcon />}
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default SwitchAccountListItem;
