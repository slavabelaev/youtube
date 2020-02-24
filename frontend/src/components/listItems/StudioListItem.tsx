import React from "react";
import LinkListItem from "../common/LinkListItem";
import {STUDIO_PAGE_ROUTE} from "../../pages/StudioPage";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function StudioListItem() {
    return (
        <LinkListItem
            title="YonTube Studio"
            to={STUDIO_PAGE_ROUTE}
            icon={PlayCircleFilledIcon}
        />
    )
}

export default StudioListItem;
