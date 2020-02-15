import React from "react";
import {List} from "@material-ui/core";
import AccountListItem, {AccountModel} from "./AccountsListItem";
import LoadList, {LoadListProps} from "../../LoadList";

export interface AccountsListProps {
    onLoad: LoadListProps['onLoad'];
}

const AccountsList: React.FC<AccountsListProps> = ({ onLoad }) => {
    const renderItem = (item: AccountModel) => (
        <AccountListItem
            {...item}
            key={item.email}
        />
    );

    return (
        <List>
            <LoadList
                renderItem={renderItem}
                renderLoadMore={null}
                onLoad={onLoad}
            />
        </List>
    )
};

export default AccountsList;
