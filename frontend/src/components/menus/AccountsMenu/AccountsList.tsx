import React from "react";
import {List} from "@material-ui/core";
import AccountListItem, {AccountModel} from "./AccountsListItem";
import LoadList, {LoadListProps} from "../../common/LoadList";

export interface AccountsListProps {
    onLoad: LoadListProps['onLoad'];
}

function AccountsList({ onLoad }: AccountsListProps) {
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
