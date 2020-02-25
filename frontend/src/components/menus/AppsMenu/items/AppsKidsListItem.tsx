import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import ChildCareIcon from "@material-ui/icons/ChildCare";

function AppsKidsListItem() {
    return (
        <LinkListItem
            title="YonTube Kids"
            to="/apps/kids"
            icon={() => <ChildCareIcon color="primary" />}
        />
    )
}

export default AppsKidsListItem;
