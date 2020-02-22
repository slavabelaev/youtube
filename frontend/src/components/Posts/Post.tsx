import React, {ReactNode} from "react";
import {AvatarProps, Card, CardHeaderProps} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import LikeDislikeButton, {LikeDislikeButtonProps} from "../buttons/LikeDislikeButton";
import Button from "@material-ui/core/Button";

export interface PostModel {
    id: string;
    avatarSrc: AvatarProps['src']
    title: CardHeaderProps['title'];
    createdAt: CardHeaderProps['subheader'];
    text: string;
    initialLikes: LikeDislikeButtonProps['initialLikes'];
    initialDislikes: LikeDislikeButtonProps['initialDislikes'];
    initialChecked: LikeDislikeButtonProps['initialChecked'];

}

export interface PostProps extends PostModel {
    bottomToolbar?: ReactNode;
}

function Post({
    avatarSrc,
    title,
    createdAt,
    text,
    initialLikes,
    initialDislikes,
    initialChecked,
    bottomToolbar
}: PostProps) {
    const headerAction = (
        <IconButton>
            <MoreVertIcon />
        </IconButton>
    );

    const avatar = (
        <Avatar
            src={avatarSrc}
        />
    );

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={avatar}
                action={headerAction}
                title={title}
                subheader={createdAt}
            />
            <CardContent>
                <Typography>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <LikeDislikeButton
                    initialLikes={initialLikes}
                    initialDislikes={initialDislikes}
                    initialChecked={initialChecked}
                    LikeButtonProps={{size: 'small'}}
                    DislikeButtonProps={{size: 'small'}}
                />
                <Button size="small">
                    Оставить комментарий
                </Button>
            </CardActions>
            {bottomToolbar}
        </Card>
    )
};

export default Post;
