import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage, {HOME_PAGE_ROUTE} from "./components/pages/HomePage";
import WatchPage, {WATCH_PAGE_ROUTE} from "./components/pages/WatchPage";
import ChannelPage, {CHANNEL_PAGE_ROUTE} from "./components/pages/ChannelPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import TrendingPage, {TRENDING_PAGE_ROUTE} from "./components/pages/TrendingPage";
import SubscriptionsPage, {SUBSCRIPTIONS_PAGE_ROUTE} from "./components/pages/SubscriptionsPage";
import SearchPage, {SEARCH_PAGE_ROUTE} from "./components/pages/SearchPage";
import PaidMembershipsPage, {PAID_MEMBERSHIPS_PAGE_ROUTE} from "./components/pages/PaidMembershipsPage";
import StudioPage, {STUDIO_PAGE_ROUTE} from "./components/pages/StudioPage";
import SettingsPage, {SETTINGS_PAGE_ROUTE} from "./components/pages/SettingsPage";
import PersonalDataPage, {PERSONAL_DATA_PAGE_ROUTE} from "./components/pages/PersonalDataPage";
import HelpPage, {HELP_PAGE_ROUTE} from "./components/pages/HelpPage";
import ReviewsPage, {REVIEWS_PAGE_ROUTE} from "./components/pages/ReviewsPage";
import LibraryPage, {LIBRARY_PAGE_ROUTE} from "./components/pages/LibraryPage";
import HistoryPage, {HISTORY_PAGE_ROUTE} from "./components/pages/HistoryPage";
import PlaylistPage, {PLAYLIST_PAGE_ROUTE} from "./components/pages/PlaylistPage";
import PurchasesPage, {PURCHASES_PAGE_ROUTE} from "./components/pages/PurchasesPage";
import GamingPage, {GAMING_PAGE_ROUTE} from "./components/pages/GamingPage";
import StreamingPage, {STREAMING_PAGE_ROUTE} from "./components/pages/StreamingPage";
import ReportsPage, {REPORTS_PAGE_ROUTE} from "./components/pages/ReportsPage";
import AboutPage, {ABOUT_PAGE_ROUTE} from "./components/pages/AboutPage";
import PressPage, {PRESS_PAGE_ROUTE} from "./components/pages/PressPage";
import CopyrightPage, {COPYRIGHT_PAGE_ROUTE} from "./components/pages/CopyrightPage";
import ContactsPage, {CONTACTS_PAGE_ROUTE} from "./components/pages/ContactsPage";
import CreatorsPage, {CREATORS_PAGE_ROUTE} from "./components/pages/CreatorsPage";
import AdsPage, {ADS_PAGE_ROUTE} from "./components/pages/AdsPage";
import DevelopersPage, {DEV_PAGE_ROUTE} from "./components/pages/DevelopersPage";
import TermsPage, {TERMS_PAGE_ROUTE} from "./components/pages/TermsPage";
import PrivacyPage, {PRIVACY_PAGE_ROUTE} from "./components/pages/PrivacyPage";
import PoliciesPage, {POLICIES_PAGE_ROUTE} from "./components/pages/PoliciesPage";
import NewPage, {NEW_PAGE_ROUTE} from "./components/pages/NewPage";

const Routes: React.FC = () => (
    <Switch>
        <Route exact={true} path={HOME_PAGE_ROUTE} component={HomePage} />
        <Route path={WATCH_PAGE_ROUTE} component={WatchPage} />
        <Route path={CHANNEL_PAGE_ROUTE} component={ChannelPage} />
        <Route path={TRENDING_PAGE_ROUTE} component={TrendingPage} />
        <Route path={SUBSCRIPTIONS_PAGE_ROUTE} component={SubscriptionsPage} />
        <Route path={SEARCH_PAGE_ROUTE} component={SearchPage} />
        <Route path={PAID_MEMBERSHIPS_PAGE_ROUTE} component={PaidMembershipsPage} />
        <Route path={STUDIO_PAGE_ROUTE} component={StudioPage} />
        <Route path={SETTINGS_PAGE_ROUTE} component={SettingsPage} />
        <Route path={PERSONAL_DATA_PAGE_ROUTE} component={PersonalDataPage} />
        <Route path={HELP_PAGE_ROUTE} component={HelpPage} />
        <Route path={REVIEWS_PAGE_ROUTE} component={ReviewsPage} />
        <Route path={LIBRARY_PAGE_ROUTE} component={LibraryPage} />
        <Route path={HISTORY_PAGE_ROUTE} component={HistoryPage} />
        <Route path={PLAYLIST_PAGE_ROUTE} component={PlaylistPage} />
        <Route path={PURCHASES_PAGE_ROUTE} component={PurchasesPage} />
        <Route path={GAMING_PAGE_ROUTE} component={GamingPage} />
        <Route path={STREAMING_PAGE_ROUTE} component={StreamingPage} />
        <Route path={REPORTS_PAGE_ROUTE} component={ReportsPage} />
        <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} />
        <Route path={PRESS_PAGE_ROUTE} component={PressPage} />
        <Route path={COPYRIGHT_PAGE_ROUTE} component={CopyrightPage} />
        <Route path={CONTACTS_PAGE_ROUTE} component={ContactsPage} />
        <Route path={CREATORS_PAGE_ROUTE} component={CreatorsPage} />
        <Route path={ADS_PAGE_ROUTE} component={AdsPage} />
        <Route path={DEV_PAGE_ROUTE} component={DevelopersPage} />
        <Route path={TERMS_PAGE_ROUTE} component={TermsPage} />
        <Route path={TERMS_PAGE_ROUTE} component={TermsPage} />
        <Route path={PRIVACY_PAGE_ROUTE} component={PrivacyPage} />
        <Route path={POLICIES_PAGE_ROUTE} component={PoliciesPage} />
        <Route path={NEW_PAGE_ROUTE} component={NewPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default Routes;
