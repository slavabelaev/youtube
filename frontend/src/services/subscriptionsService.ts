import {SubscriptionProps} from "../components/Subscriptions/Subscriptions";
import faker from "faker/locale/en";

export const generateSubscriptions = async (): Promise<SubscriptionProps[]> => Array(12)
    .fill(null)
    .map((item, index: number) => ({
        id: `${index}`,
        title: faker.company.companyName(),
        linkTo: `/channel/${index}`,
        avatarUrl: faker.image.avatar()
    }));
