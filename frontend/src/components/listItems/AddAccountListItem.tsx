import React from "react";
import MenuListItem from "../common/MenuListItem";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SignInDialogTrigger, {SignInDialogTriggerProps} from "../triggers/SignInDialogTrigger";

function AddAccountListItem() {
    const renderTrigger: SignInDialogTriggerProps['renderTrigger'] = (openDialog) => (
        <MenuListItem
            title="Add account"
            icon={<PersonAddIcon />}
            onClick={openDialog}
        />
    );

    return (
        <SignInDialogTrigger
            renderTrigger={renderTrigger}
        />
    )
}

export default AddAccountListItem;
