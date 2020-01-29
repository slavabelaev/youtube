import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import RouteItem from "../interfaces/RouteItem";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export const HOME_ROUTE: RouteItem = { title: 'Главная', to: '/', icon: HomeIcon };
export const TRENDING_ROUTE: RouteItem = { title: 'В тренде', to: '/feed/trending', icon: WhatshotIcon };
export const SUBSCRIPTIONS_ROUTE: RouteItem = { title: 'Подписки', to: '/feed/subscriptions', icon: SubscriptionsIcon };
export const LIBRARY_ROUTE: RouteItem = { title: 'Библиотека', to: '/feed/library', icon: VideoLibraryIcon };
export const HISTORY_ROUTE: RouteItem = { title: 'История', to: '/feed/history', icon: HistoryIcon };
export const WATCH_LATER_ROUTE: RouteItem = { title: 'Смотреть позже', to: '/playlist?list=WL', icon: WatchLaterIcon };
export const PURCHASES_ROUTE: RouteItem = { title: 'Покупки', to: '/feed/purchases', icon: LocalOfferIcon };
export const FAVORITES_ROUTE: RouteItem = { title: 'Понравившиеся', to: '/playlist?list=1', icon: ThumbUpIcon };
export const GAMING_ROUTE: RouteItem = { title: 'Видеоигры', to: '/gaming', icon: VideogameAssetIcon };
export const STREAMING_ROUTE: RouteItem = { title: 'Трансляции', to: '/streaming', icon: WifiTetheringIcon };
export const SETTINGS_ROUTE: RouteItem = { title: 'Настройки', to: '/settings', icon: SettingsIcon };
export const REPORTS_ROUTE: RouteItem = { title: 'Жалобы', to: '/report-history', icon: FlagIcon };
export const HELP_ROUTE: RouteItem = { title: 'Справка', to: '/help', icon: HelpIcon };
export const REVIEWS_ROUTE: RouteItem = { title: 'Отправить отзыв', to: '/send-review', icon: RateReviewIcon };
export const ABOUT_ROUTE: RouteItem = { title: 'О сервисе', to: '/about', icon: () => null };
export const PRESS_ROUTE: RouteItem = { title: 'Прессе', to: '/press', icon: () => null };
export const COPYRIGHT_ROUTE: RouteItem = { title: 'Правообладателям', to: '/', icon: () => null };
export const CONTACT_US_ROUTE: RouteItem = { title: 'Связаться с нами', to: '/contact-us', icon: () => null };
export const CREATORS_ROUTE: RouteItem = { title: 'Авторам', to: '/creators', icon: () => null };
export const ADS_ROUTE: RouteItem = { title: 'Рекламодателям', to: '/ads', icon: () => null };
export const DEV_ROUTE: RouteItem = { title: 'Разработчикам', to: '/dev', icon: () => null };
export const TERMS_ROUTE: RouteItem = { title: 'Условия использования', to: '/terms', icon: () => null };
export const PRIVACY_ROUTE: RouteItem = { title: 'Конфиденциальность', to: '/privacy', icon: () => null };
export const RULES_ROUTE: RouteItem = { title: 'Правила и безопасность', to: '/policies/rules-and-safety', icon: () => null };
export const NEW_ROUTE: RouteItem = { title: 'Новые функции', to: '/new', icon: () => null };

export const MAIN_ROUTES: RouteItem[] = [
    HOME_ROUTE,
    TRENDING_ROUTE,
    SUBSCRIPTIONS_ROUTE,
    LIBRARY_ROUTE,
];

export const PRIMARY_ROUTES: RouteItem[] = [
    HOME_ROUTE,
    TRENDING_ROUTE,
    SUBSCRIPTIONS_ROUTE,
];

export const SECONDARY_ROUTES: RouteItem[] = [
    LIBRARY_ROUTE,
    HISTORY_ROUTE,
    WATCH_LATER_ROUTE,
    PURCHASES_ROUTE,
    FAVORITES_ROUTE,
];

export const PLAYLISTS_ROUTES: RouteItem[] = Array(10).fill(null).map((_, index) => (
    { title: `Плэйлист ${index}`, to: `/playlist?list=${index}`, icon: PlaylistPlayIcon }
));

export const SUBSCRIPTIONS_ROUTES: RouteItem[] = Array(10).fill(null).map((_, index) => (
    { title: `Название канала ${index}`, to: `/channel/${index}`, icon: () => null }
));

export const OTHER_FEATURES_ROUTES: RouteItem[] = [
    GAMING_ROUTE,
    STREAMING_ROUTE
];

export const OPTIONS_ROUTES: RouteItem[] = [
    SETTINGS_ROUTE,
    REPORTS_ROUTE,
    HELP_ROUTE,
    REVIEWS_ROUTE
];

export const GUIDE_PRIMARY_ROUTES: RouteItem[] = [
    ABOUT_ROUTE,
    PRESS_ROUTE,
    COPYRIGHT_ROUTE,
    CONTACT_US_ROUTE,
    CREATORS_ROUTE,
    ADS_ROUTE,
    DEV_ROUTE,
];

export const GUIDE_SECONDARY_ROUTES: RouteItem[] = [
    TERMS_ROUTE,
    PRIVACY_ROUTE,
    RULES_ROUTE,
    NEW_ROUTE,
];
