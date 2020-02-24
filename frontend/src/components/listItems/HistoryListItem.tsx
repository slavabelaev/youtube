import React from "react";
import LinkListItem from "../common/LinkListItem";
import {HISTORY_PAGE_ROUTE} from "../../pages/HistoryPage";
import HistoryIcon from "@material-ui/icons/History";

function HistoryListItem() {
    return (
        <LinkListItem
            title="History"
            to={HISTORY_PAGE_ROUTE}
            icon={HistoryIcon}
        />
    )
}

export default HistoryListItem;
