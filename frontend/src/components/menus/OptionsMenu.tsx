import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../common/RouteListItem";
import {HELP_ROUTE, REPORTS_ROUTE, REVIEWS_ROUTE, SETTINGS_ROUTE} from "../../constants/routes";

const OptionsMenu: React.FC = () => {
    return (
        <List>
            <RouteListItem {...SETTINGS_ROUTE} />
            <RouteListItem {...REPORTS_ROUTE} />
            <RouteListItem {...HELP_ROUTE} />
            <RouteListItem {...REVIEWS_ROUTE} />
        </List>
    );
};

export default OptionsMenu;
