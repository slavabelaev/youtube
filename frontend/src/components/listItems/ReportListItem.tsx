import React from "react";
import MenuListItem from "../common/MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";

function ReportListItem() {
    return (
        <MenuListItem
            title="Report"
            icon={<FlagIcon />}
        />
    )
}

export default ReportListItem;
