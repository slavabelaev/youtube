import {Notification} from "../components/Notifications/Notifications";

export const generateNotifications = async (): Promise<Notification[]> => Array(12)
    .fill(null)
    .map(_ => ({
        text: `На канале "Дмитрий Гордон" появилось новое видео: "Гордон о том, кто скоро покинет команду Зеленского и о возвращении Яценюка в политику". Советуем его посмотреть.`,
        avatarUrl: '',
        imageUrl: 'https://source-to-image',
        createdAt: new Date()
    }));
