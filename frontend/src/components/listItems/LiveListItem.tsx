import React from "react";
import LinkListItem from "../common/LinkListItem";
import {LIVE_PAGE_ROUTE} from "../../pages/LivePage";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";

function LiveListItem() {
    return (
        <LinkListItem
            title="Live"
            to={LIVE_PAGE_ROUTE}
            icon={WifiTetheringIcon}
        />
    )
}

export default LiveListItem;
