import faker from "faker/locale/en";
import {SubscriptionModel} from "../models/SubscriptionModel";

export const generateSubscriptions = async (): Promise<SubscriptionModel[]> => Array(12)
    .fill(null)
    .map((item, index: number) => ({
        id: `${index}`,
        title: faker.company.companyName(),
        avatarUrl: faker.image.avatar()
    }));
