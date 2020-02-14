import {PostProps} from "../components/Post";
import faker from "faker/locale/en";

export const generatePosts = async (): Promise<PostProps[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: index.toString(),
        avatarSrc: faker.image.avatar(),
        title: faker.company.companyName(),
        subheader: faker.date.past().toLocaleDateString(),
        text: faker.lorem.paragraph(),
        LikeDislikeButtonProps: {
            initialLikes: Math.round(Math.random() * 10000),
            initialDislikes: Math.round(Math.random() * 5000)
        }
    }));
