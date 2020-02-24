import React from "react";
import LinkListItem from "../common/LinkListItem";
import {PERSONAL_DATA_PAGE_ROUTE} from "../../pages/PersonalDataPage";
import SecurityIcon from "@material-ui/icons/Security";

function PersonalDataListItem() {
    return (
        <LinkListItem
            title="Your data in YonTube"
            to={PERSONAL_DATA_PAGE_ROUTE}
            icon={SecurityIcon}
        />
    )
}

export default PersonalDataListItem;
