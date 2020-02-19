import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChannelFeaturedPage, {CHANNEL_FEATURED_PAGE_ROUTE} from "./pages/ChannelFeaturedPage";
import ChannelVideosPage, {CHANNEL_VIDEOS_PAGE_ROUTE} from "./pages/ChannelVideosPage";
import ChannelPlaylistsPage, {CHANNEL_PLAYLISTS_PAGE_ROUTE} from "./pages/ChannelPlaylistsPage";
import ChannelCommunityPage, {CHANNEL_COMMUNITY_PAGE_ROUTE} from "./pages/ChannelCommunityPage";
import ChannelChannelsPage, {CHANNEL_CHANNELS_PAGE_ROUTE} from "./pages/ChannelChannelsPage";
import ChannelAboutPage, {CHANNEL_ABOUT_PAGE_ROUTE} from "./pages/ChannelAboutPage";
import {CHANNEL_PAGE_ROUTE} from "./index";

const ChannelRoutes: React.FC = () => (
    <Switch>
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_FEATURED_PAGE_ROUTE} component={ChannelFeaturedPage} />
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_VIDEOS_PAGE_ROUTE} component={ChannelVideosPage} />
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_PLAYLISTS_PAGE_ROUTE} component={ChannelPlaylistsPage} />
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_COMMUNITY_PAGE_ROUTE} component={ChannelCommunityPage} />
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_CHANNELS_PAGE_ROUTE} component={ChannelChannelsPage} />
        <Route path={CHANNEL_PAGE_ROUTE + CHANNEL_ABOUT_PAGE_ROUTE} component={ChannelAboutPage} />
        <Redirect to={CHANNEL_PAGE_ROUTE + CHANNEL_FEATURED_PAGE_ROUTE} />
    </Switch>
);

export default ChannelRoutes;
