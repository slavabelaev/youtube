import {CommentModel} from "../components/Comments/Comment";
import faker from "faker/locale/en";

export const generateComments = async (): Promise<CommentModel[]> => {
    return Array(12).fill(null).map((_, index) => ({
        id: index.toString(),
        avatarUrl: faker.image.avatar(),
        userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        text: faker.lorem.text(),
        createdAt: faker.date.recent(),
        initialLikes: Math.round(Math.random() * 9999),
        initialDislikes: Math.round(Math.random() * 9999),
        initialChecked: index % 4 === 0 ? 'like' : 'none',
        edited: index % 3 === 0
    }));
};
