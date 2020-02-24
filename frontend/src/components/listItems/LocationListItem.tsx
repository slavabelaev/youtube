import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export interface LocationListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function LocationListItem({ onClick }: LocationListItemProps) {
    return (
        <MenuListItem
            title="Location: USA"
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default LocationListItem;
