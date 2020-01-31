import React from "react";
import {List} from "@material-ui/core";
import AccountListItem, {AccountListItemProps} from "./AccountsListItem";
import Divider from "@material-ui/core/Divider";

export interface AccountsMenuProps {
    items?: AccountListItemProps[]
}

const accounts: AccountListItemProps[] = [
    { fullName: 'User 1', email: 'user1@email.com', avatarUrl: '', selected: true },
    { fullName: 'User 2', email: 'user2@email.com', avatarUrl: '', selected: false },
    { fullName: 'User 3', email: 'user3@email.com', avatarUrl: '', selected: false },
];
const AccountsList: React.FC<AccountsMenuProps> = ({ items = accounts }) => {
    const selectedItems = items.filter(item => item.selected);
    const otherItems = items.filter(item => !item.selected);
    const hasSelected = !!selectedItems.length;
    const hasOther = !!otherItems.length;
    const needDivider = hasSelected && hasOther;

    const renderItem = (item: AccountListItemProps) => (
        <AccountListItem {...item} />
    );

    const selectedList = (
        <List>
            {selectedItems.map(renderItem)}
        </List>
    );

    const otherList = (
        <List>
            {otherItems.map(renderItem)}
        </List>
    );

    return (
        <div>
            {hasSelected ? selectedList : null}
            {needDivider ? <Divider /> : null}
            {hasOther ? otherList : null}
        </div>
    )
};

export default AccountsList;
