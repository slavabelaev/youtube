import {PostModel} from "../components/Posts/Post";
import faker from "faker/locale/en";

export const generatePosts = async (): Promise<PostModel[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: index.toString(),
        avatarSrc: faker.image.avatar(),
        title: faker.company.companyName(),
        createdAt: faker.date.past().toLocaleDateString(),
        text: faker.lorem.paragraph(),
        initialLikes: Math.round(Math.random() * 10000),
        initialDislikes: Math.round(Math.random() * 5000),
        initialChecked: 'none'
    }));
