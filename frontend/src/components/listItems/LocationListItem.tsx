import React, {useContext} from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {LocationContext} from "../../contexts/LocationContext";

export interface LocationListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function LocationListItem({ onClick }: LocationListItemProps) {
    const context = useContext(LocationContext);
    const locationName = context?.location?.label;
    return (
        <MenuListItem
            title={`Location: ${locationName}`}
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default LocationListItem;
