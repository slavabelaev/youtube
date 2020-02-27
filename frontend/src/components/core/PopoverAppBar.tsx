import React, {ReactNode} from "react";
import {IconButtonProps, Toolbar, TypographyProps} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export interface PopoverAppBarProps {
    title: TypographyProps['children'];
    onBack?: IconButtonProps['onClick'];
    endAction?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    toolbar: {
        minHeight: theme.mixins.toolbar.minHeight
    },
    backButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        marginRight: 'auto'
    }
}));

function PopoverAppBar({
    title,
    onBack,
    endAction
}: PopoverAppBarProps) {
    const classes = useStyles();

    const backButton = onBack ? (
        <IconButton
            className={classes.backButton}
            edge="start"
            onClick={onBack}
        >
            <ArrowBackIcon />
        </IconButton>
    ) : null;

    const titleNode = (
        <Typography
            className={classes.title}
            variant="body1"
        >
            {title}
        </Typography>
    );

    return (
        <AppBar
            className={classes.root}
            position="sticky"
            variant="outlined"
            color="inherit"
        >
            <Toolbar
                className={classes.toolbar}
            >
                {backButton}
                {titleNode}
                {endAction}
            </Toolbar>
        </AppBar>
    )
}

export default PopoverAppBar;
