import faker from "faker/locale/en";
import {AccountModel} from "../components/menus/AccountsMenu/AccountsListItem";

export const generateAccounts = async (): Promise<AccountModel[]> => await Array(3).fill(null)
    .map((_, index) => ({
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatarUrl: faker.image.avatar(),
        email: faker.internet.email(),
        selected: index % 3 === 0
    }));
