import React from "react";
import LinkListItem from "../common/LinkListItem";
import {REPORTS_PAGE_ROUTE} from "../../pages/ReportsPage";
import FlagIcon from "@material-ui/icons/Flag";

function ReportHistoryListItem() {
    return (
        <LinkListItem
            title="Report history"
            to={REPORTS_PAGE_ROUTE}
            icon={FlagIcon}
        />
    )
}

export default ReportHistoryListItem;
