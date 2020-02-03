import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MediaBox from "./MediaBox";

const useStyles = makeStyles((theme: Theme) => createStyles({
    listItemTextPrimary: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        '&:visited': {
            color: 'inherit'
        },
        marginBottom: theme.spacing(1)
    },
    channelLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        '&:visited': {
            color: 'inherit'
        }
    },
    viewsLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        '&:visited': {
            color: 'inherit'
        }
    },
    createdAtLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        '&:visited': {
            color: 'inherit'
        }
    },
    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    }
}));
const GridItem: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <MediaBox
                imageUrl="none"
                style={{
                    minHeight: 165
                }}
            />
            <List>
                <ListItem dense disableGutters alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            className={classes.avatar}
                            component={Link}
                            to="/channel/1"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Link
                                className={classes.listItemTextPrimary}
                                to="/watch?v=1"
                            >
                                Очень длинное название видео / дополнительное описание
                            </Link>
                        }
                        secondary={
                            <>
                                <Link to="/channel/1" className={classes.channelLink}>Channel Name</Link>
                                <Link to="/watch?1" className={classes.viewsLink}>999 тыс. просмотров</Link>
                                <Link to="/watch?1" className={classes.createdAtLink}>12 часов назад</Link>
                            </>
                        }
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end">
                            <MoreVertIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )
}

export default GridItem;
