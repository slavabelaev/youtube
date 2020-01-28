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
import {Box, BoxProps} from "@material-ui/core";

interface ImageBoxProps extends BoxProps {
    src: string;
    to: string;
}
const useImageBoxStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'block',
        height: theme.spacing(20),
        backgroundColor: theme.palette.grey.A700,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
}));
const ImageBox: React.FC<ImageBoxProps> = ({ src, ...otherProps }) => {
    const classes = useImageBoxStyles();
    const styles = {
        backgroundImage: `url('${src}')`,
    };

    return (
        <Box
            className={classes.root}
            style={styles}
            {...otherProps}
        />
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    listItemTextPrimary: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        overflow: 'hidden',
        fontWeight: 600,
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
        color: 'initial',
        '&:visited': {
            color: 'initial'
        }
    },
    viewsLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'initial',
        '&:visited': {
            color: 'initial'
        }
    },
    createdAtLink: {
        display: 'block',
        textDecoration: 'none',
        color: 'initial',
        '&:visited': {
            color: 'initial'
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
            <ImageBox
                src=""
                component={Link}
                to="/watch?v=1"
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
