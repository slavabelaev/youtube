import React from "react";
import LinkListItem from "../common/LinkListItem";
import {GAMING_PAGE_ROUTE} from "../../pages/GamingPage";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

function GamingListItem() {
    return (
        <LinkListItem
            title="Gaming"
            to={GAMING_PAGE_ROUTE}
            icon={VideogameAssetIcon}
        />
    )
}

export default GamingListItem;
