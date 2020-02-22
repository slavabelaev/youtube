import React from "react";
import {List} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Divider from "@material-ui/core/Divider";
import AccountsList, {AccountsListProps} from "./AccountsList";
import LinkListItem from "../../common/LinkListItem";
import {SIGN_OUT_MENU_ITEM} from "../../../pages/SignInPage";
import MenuListItem from "../../common/MenuListItem";

export interface AccountsMenuProps extends AccountsListProps {}

function AccountsMenu({ onLoad }: AccountsMenuProps) {
    const actionsList = (
        <List>
            <MenuListItem
                title="Добавить аккаунт"
                icon={<PersonAddIcon />}
            />
            <LinkListItem {...SIGN_OUT_MENU_ITEM} />
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
};

export default AccountsMenu;
