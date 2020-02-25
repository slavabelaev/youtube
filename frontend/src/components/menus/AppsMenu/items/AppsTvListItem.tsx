import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import TvIcon from "@material-ui/icons/Tv";

function AppsTvListItem() {
    return (
        <LinkListItem
            title="YonTube TV"
            to="/apps/tv"
            icon={() => <TvIcon color="primary" />}
        />
    )
}

export default AppsTvListItem;
