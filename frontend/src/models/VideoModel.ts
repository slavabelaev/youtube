export interface VideoModel {
    id: string;
    title: string;
    videoUrl: string;
    duration: number;
    previewUrl: string;
    channelName: string;
    channelUrl: string;
    channelAvatarUrl?: string;
    views?: number;
    isRecommended?: boolean;
    isNew?: boolean;
    verified?: boolean;
    createdAt: Date;
}
