import React from "react";
import AccountsMenu from "../../AccountsMenu";
import PopoverAppBar from "../../../core/PopoverAppBar";
import {AccountMenuViewProps} from "../AccountMenuViewProps";

export interface AccountsViewProps extends AccountMenuViewProps {}

function AccountsView({ onBack }: AccountsViewProps) {
    return (
        <div>
            <PopoverAppBar
                title="Accounts"
                onBack={onBack}
            />
            <AccountsMenu />
        </div>
    )
}

export default AccountsView;
