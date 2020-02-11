import React from "react";
import Menu from "../Menu";
import {GAMING_ROUTE} from "../../pages/GamingPage";
import {STREAMING_ROUTE} from "../../pages/StreamingPage";

const OtherFeaturesMenu: React.FC = () => (
    <Menu items={[
        GAMING_ROUTE,
        STREAMING_ROUTE
    ]} />
);

export default OtherFeaturesMenu;
