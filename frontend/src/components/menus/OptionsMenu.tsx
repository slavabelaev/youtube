import React from "react";
import Menu from "../Menu";
import {SETTINGS_ROUTE} from "../../pages/SettingsPage";
import {REPORTS_ROUTE} from "../../pages/ReportsPage";
import {HELP_ROUTE} from "../../pages/HelpPage";
import {REVIEWS_ROUTE} from "../../pages/ReviewsPage";

const OptionsMenu: React.FC = () => (
    <Menu items={[
        SETTINGS_ROUTE,
        REPORTS_ROUTE,
        HELP_ROUTE,
        REVIEWS_ROUTE
    ]} />
);

export default OptionsMenu;
