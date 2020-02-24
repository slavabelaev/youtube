import React from "react";
import {List} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AccountsList, {AccountsListProps} from "./AccountsList";
import SignOutListItem from "../../listItems/SignOutListItem";
import AddAccountListItem from "../../listItems/AddAccountListItem";

export interface AccountsMenuProps extends AccountsListProps {}

function AccountsMenu({ onLoad }: AccountsMenuProps) {
    const actionsList = (
        <List>
            <AddAccountListItem/>
            <SignOutListItem/>
        </List>
    );

    return (
        <div>
            <AccountsList
                onLoad={onLoad}
            />
            <Divider />
            {actionsList}
        </div>
    );
}

export default AccountsMenu;
