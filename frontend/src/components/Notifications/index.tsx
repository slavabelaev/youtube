import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {Notification} from "./Notifications";

const Notifications = React.lazy(() => import('./Notifications'));

const generateNotifications = (): Notification[] => Array(12).fill(null).map(_ => ({
    text: `На канале "Дмитрий Гордон" появилось новое видео: "Гордон о том, кто скоро покинет команду Зеленского и о возвращении Яценюка в политику". Советуем его посмотреть.`,
    avatarUrl: '',
    imageUrl: 'https://source-to-image',
    createdAt: new Date()
}));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <Notifications items={generateNotifications()} />
    </Suspense>
);
