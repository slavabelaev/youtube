export interface PostModel {
    id: string;
    avatarUrl: string;
    title: string;
    createdAt: Date;
    text: string;
    likes: number;
    dislikes: number;
    liked: boolean;
    disliked: boolean;
}
