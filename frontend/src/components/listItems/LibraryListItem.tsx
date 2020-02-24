import React from "react";
import LinkListItem from "../common/LinkListItem";
import {LIBRARY_PAGE_ROUTE} from "../../pages/LibraryPage";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function LibraryListItem() {
    return (
        <LinkListItem
            title="Library"
            to={LIBRARY_PAGE_ROUTE}
            icon={VideoLibraryIcon}
        />
    )
}

export default LibraryListItem;
