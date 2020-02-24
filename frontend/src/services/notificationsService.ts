import faker from "faker/locale/en";
import {NotificationModel} from "../models/NotificationModel";

export const generateNotifications = async (): Promise<NotificationModel[]> => Array(12)
    .fill(null)
    .map((_, index) => ({
        id: index.toString(),
        text: faker.lorem.sentences(2),
        avatarUrl: faker.image.avatar(),
        imageUrl: 'https://source-to-image',
        createdAt: new Date()
    }));
