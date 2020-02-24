import React from "react";
import LinkListItem from "../common/LinkListItem";
import {HOME_PAGE_ROUTE} from "../../pages/HomePage";
import HomeIcon from "@material-ui/icons/Home";

function HomeListItem() {
    return (
        <LinkListItem
            title="Home"
            to={HOME_PAGE_ROUTE}
            exact={true}
            icon={HomeIcon}
        />
    )
}

export default HomeListItem;
