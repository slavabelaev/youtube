import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import PersonIcon from "@material-ui/icons/Person";

function AppsAcademyListItem() {
    return (
        <LinkListItem
            title="Creator Academy"
            to="/apps/academy"
            icon={() => <PersonIcon color="primary" />}
        />
    )
}

export default AppsAcademyListItem;
