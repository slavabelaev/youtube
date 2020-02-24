import React from "react";
import MenuListItem from "../common/MenuListItem";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function AddAccountListItem() {
    return (
        <MenuListItem
            title="Add account"
            icon={<PersonAddIcon />}
        />
    )
}

export default AddAccountListItem;
