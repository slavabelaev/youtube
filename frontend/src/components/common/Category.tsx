import React from "react";
import {Avatar, AvatarProps, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

export interface CategoryProps {
    avatarSrc: AvatarProps['src'];
    title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: theme.spacing(1)
    }
}));

const Category: React.FC<CategoryProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar
                className={classes.avatar}
                src={props.avatarSrc}
            />
            <Typography>
                {props.title}
            </Typography>
        </div>
    )
};

export default Category;
