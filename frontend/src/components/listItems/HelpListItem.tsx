import React from "react";
import LinkListItem from "../common/LinkListItem";
import {HELP_PAGE_ROUTE} from "../../pages/HelpPage";
import HelpIcon from "@material-ui/icons/Help";

function HelpListItem() {
    return (
        <LinkListItem
            title="Help"
            to={HELP_PAGE_ROUTE}
            icon={HelpIcon}
        />
    )
}

export default HelpListItem;
