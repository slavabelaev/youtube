import faker from "faker/locale/en";
import {PostModel} from "../models/PostModel";

export const generatePosts = async (): Promise<PostModel[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: index.toString(),
        avatarUrl: faker.image.avatar(),
        title: faker.company.companyName(),
        createdAt: faker.date.past(),
        text: faker.lorem.paragraph(),
        likes: Math.round(Math.random() * 10000),
        dislikes: Math.round(Math.random() * 5000),
        liked: false,
        disliked: false
    }));
