import React from "react";
import {List} from "@material-ui/core";
import GamingListItem from "../listItems/GamingListItem";
import LiveListItem from "../listItems/LiveListItem";

function OtherFeaturesMenu() {
    return (
        <List>
            <GamingListItem/>
            <LiveListItem/>
        </List>
    )
}

export default OtherFeaturesMenu;
