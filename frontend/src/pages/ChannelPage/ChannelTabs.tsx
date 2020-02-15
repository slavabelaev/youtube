import React, {useState} from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import {Tabs} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {CHANNEL_VIDEOS_MENU_ITEM} from "./pages/ChannelVideosPage";
import {CHANNEL_ABOUT_MENU_ITEM} from "./pages/ChannelAboutPage";
import {CHANNEL_FEATURED_MENU_ITEM} from "./pages/ChannelFeaturedPage";
import {CHANNEL_PLAYLISTS_MENU_ITEM} from "./pages/ChannelPlaylistsPage";
import {CHANNEL_COMMUNITY_MENU_ITEM} from "./pages/ChannelCommunityPage";
import {CHANNEL_CHANNELS_MENU_ITEM} from "./pages/ChannelChannelsPage";
import ChannelRoutes from "./ChannelRoutes";
import {RouteLink} from "../../components/LinkListItem";

const ChannelTabs: React.FC = () => {
    const match = useRouteMatch();
    const { location } = useHistory();
    const items: RouteLink[] = [
        CHANNEL_FEATURED_MENU_ITEM,
        CHANNEL_VIDEOS_MENU_ITEM,
        CHANNEL_PLAYLISTS_MENU_ITEM,
        CHANNEL_COMMUNITY_MENU_ITEM,
        CHANNEL_CHANNELS_MENU_ITEM,
        CHANNEL_ABOUT_MENU_ITEM
    ];
    const initialValue = items.findIndex(item => location.pathname.includes(item.to));
    const [value, setValue] = useState(initialValue);

    const renderItem = (item: RouteLink, index: number) => (
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
