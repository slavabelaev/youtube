import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

function UploadVideoListItem() {
    return (
        <LinkListItem
            title="Upload video"
            to="/video/add"
            icon={() => <OndemandVideoIcon color="primary" />}
        />
    )
}

export default UploadVideoListItem;
