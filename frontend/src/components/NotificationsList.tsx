import React from "react";
import {createStyles, List, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {makeStyles} from "@material-ui/core/styles";

export interface Notification {
    text: string;
    avatarUrl: string;
    imageUrl?: string;
    createdAt: Date
}

export interface NotificationsListProps {
    items?: Notification[]
}

const notifications: Notification[] = Array(20).fill(null).map(_ => ({
    text: `На канале "Дмитрий Гордон" появилось новое видео: "Гордон о том, кто скоро покинет команду Зеленского и о возвращении Яценюка в политику". Советуем его посмотреть.`,
    avatarUrl: '',
    imageUrl: 'https://source-to-image',
    createdAt: new Date()
}));

const useStyles = makeStyles((theme: Theme) => createStyles({
    media: {
        minWidth: theme.spacing(12),
        maxWidth: theme.spacing(12),
        height: theme.spacing(8),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey.A700,
        margin: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius
    }
}));

const NotificationsList: React.FC<NotificationsListProps> = ({ items = notifications }) => {
    const classes = useStyles();

    const renderItem = (item: Notification) => (
      <ListItem dense button alignItems="flex-start">
          <ListItemAvatar>
              <Avatar src={item.avatarUrl} />
          </ListItemAvatar>
          <ListItemText
              primary={item.text}
              secondary={item.createdAt.toLocaleDateString()}
          />
          {item.imageUrl ? (
              <div
                  className={classes.media}
                  style={{
                      backgroundImage: `url(${item.imageUrl}`
                  }}
              />
          ) : null}
          <ListItemSecondaryAction>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );

    return (
      <List>
          {items.map(renderItem)}
      </List>
    );
};

export default NotificationsList;
