import React from "react";
import {List} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Divider from "@material-ui/core/Divider";
import AccountsList from "../../AccountsList";
import LinkListItem from "../../LinkListItem";
import {SIGN_OUT_MENU_ITEM} from "../../../pages/SignInPage";
import MenuListItem from "../../MenuListItem";

const AccountsMenu: React.FC = () => {
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
            <AccountsList />
            <Divider />
            {actionsList}
        </div>
    );
};

export default AccountsMenu;
