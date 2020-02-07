import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {Comment} from "./Comments";

const Comments = React.lazy(() => import('./Comments'));

const generateComments = (): Comment[] => Array(12).fill(null).map((_, index) => ({
    avatarUrl: '',
    userName: index % 2 === 0 ? 'Иванов Иван' : 'Василий Петров',
    text: 'Очень длинный текст сообщения, который будет отображаться здесь после отправки его пользователем, который занимает несколько строк и выражает субъективное мнение данного пользователя по отношению к той информации, которую он получил в результате просмотра видеоролика',
    createdAt: new Date(),
    initialLikes: Math.round(Math.random() * 9999),
    initialDislikes: Math.round(Math.random() * 9999),
    initialChecked: index % 4 === 0 ? 'like' : 'none',
    edited: index % 3 === 0
}));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <Comments items={generateComments()} />
    </Suspense>
);
