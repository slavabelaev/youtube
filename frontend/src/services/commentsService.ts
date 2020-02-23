import faker from "faker/locale/en";
import {CommentModel} from "../models/CommentModel";

export const generateComments = async (): Promise<CommentModel[]> => {
    return Array(12).fill(null).map((_, index) => ({
        id: index.toString(),
        avatarUrl: faker.image.avatar(),
        userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        verified: Math.random() > 0.5,
        text: faker.lorem.text(),
        createdAt: faker.date.recent(),
        likes: Math.round(Math.random() * 9999),
        dislikes: Math.round(Math.random() * 9999),
        liked: index % 4 === 0,
        disliked: !(index % 4 === 0),
        edited: index % 3 === 0
    }));
};
