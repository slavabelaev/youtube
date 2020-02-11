import React from "react";

export default interface MenuItem {
    title: string;
    to: string;
    exact?: boolean;
    icon?: React.FC;
}
