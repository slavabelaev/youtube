import React from "react";
import Menu from "../Menu";
import {GAMING_MENU_ITEM} from "../../pages/GamingPage";
import {STREAMING_MENU_ITEM} from "../../pages/StreamingPage";

const OtherFeaturesMenu: React.FC = () => (
    <Menu items={[
        GAMING_MENU_ITEM,
        STREAMING_MENU_ITEM
    ]} />
);

export default OtherFeaturesMenu;
