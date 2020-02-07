import React, {useState} from "react";
import { Switch, Route, useRouteMatch, useHistory, RouteProps } from "react-router-dom";
import Tab, {TabProps} from "@material-ui/core/Tab";
import {Tabs} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import ChannelVideosPage from "../ChannelVideosPage";
import ChannelAboutPage from "../ChannelAboutPage";

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
        { label: 'Главная', path: match.url, component: ChannelVideosPage },
        { label: 'Видео', path: `${match.url}/videos`, component: ChannelVideosPage },
        { label: 'Плэйлисты', path: `${match.url}/playlists`, component: ChannelVideosPage },
        { label: 'Сообщество', path: `${match.url}/community`, component: ChannelVideosPage },
        { label: 'Каналы', path: `${match.url}/channels`, component: ChannelVideosPage },
        { label: 'О канале', path: `${match.url}/about`, component: ChannelAboutPage }
    ];
    const initialValue = items.findIndex(item => item.path.includes(location.pathname));
    const [value, setValue] = useState(initialValue);

    const renderItem = (item: ChannelTabProps, index: number) => (
        <Tab
            key={item.path}
            label={item.label}
            component={NavLink}
            to={item.path}
            exact={true}
            onClick={() => setValue(index)}
            activeClassName="Mui-selected"
        />
    );

    const renderRoute = (item: ChannelTabProps) => (
        <Route
            key={item.path}
            path={item.path}
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
