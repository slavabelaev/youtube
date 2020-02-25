import React from "react";
import MenuListItem from "../common/MenuListItem";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

function NotRecommendListItem() {
    return (
        <MenuListItem
            title="Don't recommend channel"
            icon={<RemoveCircleOutlineIcon />}
        />
    )
}

export default NotRecommendListItem;
