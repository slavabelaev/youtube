import React from "react";
import LinkListItem from "../common/LinkListItem";
import {PAID_MEMBERSHIPS_PAGE_ROUTE} from "../../pages/PaidMembershipsPage";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function PaidMembershipsListItem() {
    return (
        <LinkListItem
            title="Paid memberships"
            to={PAID_MEMBERSHIPS_PAGE_ROUTE}
            icon={MonetizationOnIcon}
        />
    )
}

export default PaidMembershipsListItem;
