import faker from "faker/locale/en";
import {NotificationProps} from "../components/Notifications/Notification";

export const generateNotifications = async (): Promise<NotificationProps[]> => Array(12)
    .fill(null)
    .map((_, index) => ({
        id: index.toString(),
        text: faker.lorem.sentences(2),
        avatarUrl: faker.image.avatar(),
        imageSrc: 'https://source-to-image',
        linkTo: `/watch?v=${index}`,
        createdAt: new Date()
    }));
