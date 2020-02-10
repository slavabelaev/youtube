import {PostProps} from "../Post";
import faker from "faker";

const getAllPosts = (): PostProps[] => Array(12).fill(null).map((item, index) => ({
    avatarSrc: faker.image.avatar(),
    title: faker.company.companyName(),
    subheader: faker.date.past().toLocaleDateString(),
    text: faker.lorem.paragraph(),
    LikeDislikeButtonProps: {
        initialLikes: Math.round(Math.random() * 10000),
        initialDislikes: Math.round(Math.random() * 5000)
    }
}));

export default {
    getAll: getAllPosts
};
