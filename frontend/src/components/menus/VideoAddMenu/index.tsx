import React from "react";
import {List} from "@material-ui/core";
import UploadVideoListItem from "./items/UploadVideoListItem";
import GoLiveListItem from "./items/GoLiveListItem";

function VideoAddMenu() {
    return (
        <List>
            <UploadVideoListItem/>
            <GoLiveListItem/>
        </List>
    )
}

export default VideoAddMenu;
