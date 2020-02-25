import React from "react";
import {List} from "@material-ui/core";
import AccountListItem from "./AccountListItem";
import Items, {ItemsProps} from "../../common/Items";
import {AccountModel} from "../../../models/AccountModel";

export interface AccountsListProps {
    onLoad: ItemsProps['onLoad'];
}

function AccountsList({ onLoad }: AccountsListProps) {
    const renderItem = (item: AccountModel) => (
        <AccountListItem
            key={item.id}
            avatarSrc={item.avatarUrl}
            fullName={item.fullName}
            email={item.email}
            selected={false}
            onClick={() => null}
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
