import React from "react";
import LinksMenu from "../LinksMenu";
import {SETTINGS_MENU_ITEM} from "../../pages/SettingsPage";
import {REPORTS_MENU_ITEM} from "../../pages/ReportsPage";
import {HELP_MENU_ITEM} from "../../pages/HelpPage";
import {REVIEWS_MENU_ITEM} from "../../pages/ReviewsPage";

const OptionsMenu: React.FC = () => (
    <LinksMenu items={[
        SETTINGS_MENU_ITEM,
        REPORTS_MENU_ITEM,
        HELP_MENU_ITEM,
        REVIEWS_MENU_ITEM
    ]} />
);

export default OptionsMenu;
