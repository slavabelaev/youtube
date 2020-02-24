import React from "react";
import LinkListItem from "../common/LinkListItem";
import {SUBSCRIPTIONS_PAGE_ROUTE} from "../../pages/SubscriptionsPage";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

function SubscriptionsListItem() {
    return (
        <LinkListItem
            title="Subscriptions"
            to={SUBSCRIPTIONS_PAGE_ROUTE}
            icon={SubscriptionsIcon}
        />
    )
}

export default SubscriptionsListItem;
