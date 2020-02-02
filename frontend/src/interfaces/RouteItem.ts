import React from "react";

export default interface RouteItem {
    title: string;
    to: string;
    exact?: boolean;
    icon?: React.FC;
}
