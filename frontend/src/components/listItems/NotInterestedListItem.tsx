import React from "react";
import MenuListItem from "../common/MenuListItem";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

function NotInterestedListItem() {
    return (
        <MenuListItem
            title="Not interested"
            icon={<NotInterestedIcon />}
        />
    )
}

export default NotInterestedListItem;
