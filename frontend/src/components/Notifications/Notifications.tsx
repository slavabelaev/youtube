import React from "react";
import {AvatarProps, createStyles, List, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {makeStyles} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../LoadList";
import {Link} from "react-router-dom";

export interface Notification {
    text: string;
    avatarUrl: AvatarProps['src'];
    imageUrl?: string;
    createdAt: Date,
    linkTo: string;
}

export interface NotificationsProps {
    onLoad: LoadListProps['onLoad']
}

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

const Notifications: React.FC<NotificationsProps> = ({ onLoad }) => {
    const classes = useStyles();

    const renderItem = (item: Notification, index: number) => (
      <ListItem
          dense
          button
          alignItems="flex-start"
          key={index}
          component={Link}
          to={item.linkTo}
      >
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
              <IconButton edge="end">
                  <MoreVertIcon />
              </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );

    return (
      <List>
          <LoadList
              renderItem={renderItem}
              onLoad={onLoad}
          />
      </List>
    );
};

export default Notifications;
