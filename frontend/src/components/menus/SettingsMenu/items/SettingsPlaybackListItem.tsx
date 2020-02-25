import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import {SETTINGS_PLAYBACK_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsPlaybackPage";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function SettingsPlaybackListItem() {
    return (
        <LinkListItem
            title="Playback"
            to={SETTINGS_PLAYBACK_PAGE_ROUTE}
            icon={PlayArrowIcon}
        />
    )
}

export default SettingsPlaybackListItem;
