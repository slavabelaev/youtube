import React from "react";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import VideosList from "../../components/VideosList";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(0, 2, 2, 2),
        margin: 'auto'
    },
    toolbarAside: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    }
}));

const SubscriptionsPage: React.FC = () => {
    const classes = useStyles();

    const toolbar = (
        <Toolbar disableGutters>
            <Typography
                variant="h6"
            >
                Сегодня
            </Typography>
            <aside className={classes.toolbarAside}>
                <Button
                    color="secondary"
                >
                    Управление подписками
                </Button>
                <IconButton>
                    <ViewModuleIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    color="secondary"
                >
                    <ViewListIcon />
                </IconButton>
            </aside>
        </Toolbar>
    );

    return (
        <main className={classes.root}>
            {toolbar}
            <VideosList />
        </main>
    )
};

export default SubscriptionsPage;
