import React, {useState} from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import {Tabs} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {CHANNEL_VIDEOS_ROUTE} from "./pages/ChannelVideosPage";
import {CHANNEL_ABOUT_ROUTE} from "./pages/ChannelAboutPage";
import {CHANNEL_FEATURED_ROUTE} from "./pages/ChannelFeaturedPage";
import {CHANNEL_PLAYLISTS_ROUTE} from "./pages/ChannelPlaylistsPage";
import {CHANNEL_COMMUNITY_ROUTE} from "./pages/ChannelCommunityPage";
import {CHANNEL_CHANNELS_ROUTE} from "./pages/ChannelChannelsPage";
import RouteItem from "../../interfaces/RouteItem";
import ChannelRoutes from "./ChannelRoutes";

const ChannelTabs: React.FC = () => {
    const match = useRouteMatch();
    const { location } = useHistory();
    const items: RouteItem[] = [
        CHANNEL_FEATURED_ROUTE,
        CHANNEL_VIDEOS_ROUTE,
        CHANNEL_PLAYLISTS_ROUTE,
        CHANNEL_COMMUNITY_ROUTE,
        CHANNEL_CHANNELS_ROUTE,
        CHANNEL_ABOUT_ROUTE
    ];
    const initialValue = items.findIndex(item => location.pathname.includes(item.to));
    const [value, setValue] = useState(initialValue);

    const renderItem = (item: RouteItem, index: number) => (
        <Tab
            key={item.to}
            label={item.title}
            component={NavLink}
            to={match.url + item.to}
            exact={true}
            onClick={() => setValue(index)}
            activeClassName="Mui-selected"
        />
    );

    const tabs = (
        <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
        >
            {items.map(renderItem)}
        </Tabs>
    );

    return (
        <>
            {tabs}
            <ChannelRoutes />
        </>
    )
};

export default ChannelTabs;
