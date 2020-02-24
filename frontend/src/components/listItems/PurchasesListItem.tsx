import React from "react";
import LinkListItem from "../common/LinkListItem";
import {PURCHASES_PAGE_ROUTE} from "../../pages/PurchasesPage";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function PurchasesListItem() {
    return (
        <LinkListItem
            title="Purchases"
            to={PURCHASES_PAGE_ROUTE}
            icon={LocalOfferIcon}
        />
    )
}

export default PurchasesListItem;
