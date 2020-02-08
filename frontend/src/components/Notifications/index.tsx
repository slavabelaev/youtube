import React, {Suspense} from "react";
import {Notification} from "./Notifications";
import SuspenseFallback from "../SuspenseFallback";

const Notifications = React.lazy(() => import('./Notifications'));

const generateNotifications = (): Notification[] => Array(12).fill(null).map(_ => ({
    text: `На канале "Дмитрий Гордон" появилось новое видео: "Гордон о том, кто скоро покинет команду Зеленского и о возвращении Яценюка в политику". Советуем его посмотреть.`,
    avatarUrl: '',
    imageUrl: 'https://source-to-image',
    createdAt: new Date()
}));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Notifications items={generateNotifications()} />
    </Suspense>
);
