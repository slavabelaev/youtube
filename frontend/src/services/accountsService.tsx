import faker from "faker/locale/en";
import {AccountModel} from "../models/AccountModel";

export const generateAccounts = async (): Promise<AccountModel[]> => await Array(3).fill(null)
    .map((_, index) => ({
        id: index.toString(),
        avatarUrl: faker.image.avatar(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email()
    }));
