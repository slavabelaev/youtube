import React from "react";
import {List} from "@material-ui/core";
import AccountListItem, {AccountModel} from "./AccountsListItem";
import Items, {ItemsProps} from "../../common/Items";

export interface AccountsListProps {
    onLoad: ItemsProps['onLoad'];
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
            <Items
                renderItem={renderItem}
                renderLoadMore={null}
                onLoad={onLoad}
            />
        </List>
    )
}

export default AccountsList;
