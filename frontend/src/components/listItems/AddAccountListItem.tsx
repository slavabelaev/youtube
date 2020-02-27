import React from "react";
import MenuListItem from "../common/MenuListItem";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AuthDialogTrigger, {AuthDialogTriggerProps} from "../triggers/AuthDialogTrigger";

function AddAccountListItem() {
    const renderTrigger: AuthDialogTriggerProps['renderTrigger'] = (openDialog) => (
        <MenuListItem
            title="Add account"
            icon={<PersonAddIcon />}
            onClick={openDialog}
        />
    );

    return (
        <AuthDialogTrigger
            renderTrigger={renderTrigger}
        />
    )
}

export default AddAccountListItem;
