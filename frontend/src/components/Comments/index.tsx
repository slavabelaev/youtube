import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {CommentProps} from "./Comment";

const Component = React.lazy(() => import('./Comments'));

const generateComments = (): CommentProps[] => Array(12).fill(null).map((_, index) => ({
    id: index.toString(),
    avatarUrl: '',
    userName: index % 2 === 0 ? 'Иванов Иван' : 'Василий Петров',
    text: 'Очень длинный текст сообщения, который будет отображаться здесь после отправки его пользователем, который занимает несколько строк и выражает субъективное мнение данного пользователя по отношению к той информации, которую он получил в результате просмотра видеоролика',
    createdAt: new Date(),
    initialLikes: Math.round(Math.random() * 9999),
    initialDislikes: Math.round(Math.random() * 9999),
    initialChecked: index % 4 === 0 ? 'like' : 'none',
    edited: index % 3 === 0
}));

const Comments: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            onLoad={async skip => await generateComments()}
        />
    </Suspense>
);

export default Comments;
