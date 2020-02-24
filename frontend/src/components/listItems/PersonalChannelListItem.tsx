import React from "react";
import LinkListItem from "../common/LinkListItem";
import {CHANNEL_PAGE_ROUTE} from "../../pages/ChannelPage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

function PersonalChannelListItem() {
    return (
        <LinkListItem
            title="Your channel"
            to={`${CHANNEL_PAGE_ROUTE}/user`}
            icon={AccountBoxIcon}
        />
    )
}

export default PersonalChannelListItem;
