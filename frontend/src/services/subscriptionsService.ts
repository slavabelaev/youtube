import {SubscriptionProps} from "../components/Subscriptions/Subscriptions";

export const generateSubscriptions = async (): Promise<SubscriptionProps[]> => Array(12)
    .fill(null)
    .map((item, index: number) => ({
        id: `${index}`,
        title: `Название канала ${index}`,
        linkTo: `/channel/${index}`,
        imageUrl: 'invalid_url'
    }));
