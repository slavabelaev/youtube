import {Notification} from "../components/Notifications/Notifications";
import faker from "faker/locale/en";

export const generateNotifications = async (): Promise<Notification[]> => Array(12)
    .fill(null)
    .map((_, index) => ({
        text: faker.lorem.sentences(2),
        avatarUrl: faker.image.avatar(),
        imageUrl: 'https://source-to-image',
        linkTo: `/watch?v=${index}`,
        createdAt: new Date()
    }));
