import React from "react";
import LinksMenu from "../LinksMenu";
import {GAMING_MENU_ITEM} from "../../pages/GamingPage";
import {STREAMING_MENU_ITEM} from "../../pages/StreamingPage";

const OtherFeaturesMenu: React.FC = () => (
    <LinksMenu items={[
        GAMING_MENU_ITEM,
        STREAMING_MENU_ITEM
    ]} />
);

export default OtherFeaturesMenu;
