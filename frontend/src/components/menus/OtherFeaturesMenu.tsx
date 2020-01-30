import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../common/RouteListItem";
import {GAMING_ROUTE, STREAMING_ROUTE} from "../../constants/routes";

const OtherFeaturesMenu: React.FC = () => {
    return (
        <List>
            <RouteListItem {...GAMING_ROUTE} />
            <RouteListItem {...STREAMING_ROUTE} />
        </List>
    );
};

export default OtherFeaturesMenu;
