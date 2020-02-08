import React, {useState} from "react";
import { Switch, Route, useRouteMatch, useHistory, RouteProps } from "react-router-dom";
import Tab, {TabProps} from "@material-ui/core/Tab";
import {Tabs} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import ChannelVideosPage, {CHANNEL_VIDEOS_PAGE_ROUTE} from "../ChannelVideosPage";
import ChannelAboutPage, {CHANNEL_ABOUT_PAGE_ROUTE} from "../ChannelAboutPage";
import ChannelFeaturedPage, {CHANNEL_FEATURED_PAGE_ROUTE} from "../ChannelFeaturedPage";
import ChannelPlaylistsPage, {CHANNEL_PLAYLISTS_PAGE_ROUTE} from "../ChannelPlaylistsPage";
import ChannelCommunityPage, {CHANNEL_COMMUNITY_PAGE_ROUTE} from "../ChannelCommunityPage";
import ChannelChannelsPage, {CHANNEL_CHANNELS_PAGE_ROUTE} from "../ChannelChannelsPage";

export interface ChannelTabProps {
    label: TabProps['label'];
    path: string;
    component: RouteProps['component'];
}

export interface ChannelTabsProps {
    //items?: ChannelTabProps[]
}

const ChannelTabs: React.FC<ChannelTabsProps> = () => {
    const match = useRouteMatch();
    const { location } = useHistory();
    const items: ChannelTabProps[] = [
        { label: 'Главная', path: CHANNEL_FEATURED_PAGE_ROUTE, component: ChannelFeaturedPage },
        { label: 'Видео', path: CHANNEL_VIDEOS_PAGE_ROUTE, component: ChannelVideosPage },
        { label: 'Плэйлисты', path: CHANNEL_PLAYLISTS_PAGE_ROUTE, component: ChannelPlaylistsPage },
        { label: 'Сообщество', path: CHANNEL_COMMUNITY_PAGE_ROUTE, component: ChannelCommunityPage },
        { label: 'Каналы', path: CHANNEL_CHANNELS_PAGE_ROUTE, component: ChannelChannelsPage },
        { label: 'О канале', path: CHANNEL_ABOUT_PAGE_ROUTE, component: ChannelAboutPage }
    ];
    const initialValue = items.findIndex(item => item.path.includes(location.pathname));
    const [value, setValue] = useState(initialValue);

    const renderItem = (item: ChannelTabProps, index: number) => (
        <Tab
            key={item.path}
            label={item.label}
            component={NavLink}
            to={match.url + item.path}
            exact={true}
            onClick={() => setValue(index)}
            activeClassName="Mui-selected"
        />
    );

    const renderRoute = (item: ChannelTabProps) => (
        <Route
            key={item.path}
            path={match.url + item.path}
            exact={true}
            component={item.component}
        />
    );

    const router = (
        <Switch>
            {items.map(renderRoute)}
        </Switch>
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
            {router}
        </>
    )
};

export default ChannelTabs;
