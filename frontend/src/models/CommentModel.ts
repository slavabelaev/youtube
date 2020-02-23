export interface CommentModel {
    id: string;
    avatarUrl: string;
    userName: string;
    verified?: boolean;
    text: string;
    createdAt: Date;
    likes: number;
    dislikes: number;
    liked?: boolean | null;
    edited: boolean;
}
