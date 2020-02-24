import React from "react";
import LinkListItem from "../common/LinkListItem";
import {TRENDING_PAGE_ROUTE} from "../../pages/TrendingPage";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function TrendingListItem() {
    return (
        <LinkListItem
            title="Trending"
            to={TRENDING_PAGE_ROUTE}
            icon={WhatshotIcon}
        />
    )
}

export default TrendingListItem;
