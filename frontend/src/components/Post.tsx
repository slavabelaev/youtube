import React from "react";
import {AvatarProps, Card, CardHeaderProps, CardProps} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import LikeDislikeButton, {LikeDislikeButtonProps} from "./buttons/LikeDislikeButton";
import Button from "@material-ui/core/Button";

export interface PostProps {
    avatarSrc: AvatarProps['src']
    title: CardHeaderProps['title'];
    subheader: CardHeaderProps['subheader'];
    text: string;
    LikeDislikeButtonProps?: LikeDislikeButtonProps;
    CardProps?: CardProps;
}

const Post: React.FC<PostProps> = ({
    avatarSrc,
    title,
    subheader,
    text,
    LikeDislikeButtonProps,
    CardProps
}) => {
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
        <Card {...CardProps}>
            <CardHeader
                avatar={avatar}
                action={headerAction}
                title={title}
                subheader={subheader}
            />
            <CardContent>
                <Typography>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <LikeDislikeButton
                    {...LikeDislikeButtonProps}
                    LikeButtonProps={{size: 'small'}}
                    DislikeButtonProps={{size: 'small'}}
                />
                <Button size="small">
                    Оставить комментарий
                </Button>
            </CardActions>
            <CardActions>
                <Button size="small">
                    Показать комментарии
                </Button>
            </CardActions>
        </Card>
    )
};

export default Post;
