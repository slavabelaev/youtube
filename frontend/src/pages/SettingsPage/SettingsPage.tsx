import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SettingsRoutes from "./SettingsRoutes";
import SettingsMenu from "../../components/menus/SettingsMenu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex'
    },
    aside: {
        width: 240,
    },
    asideContent: {
        width: 240,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            top: theme.mixins.toolbar.minHeight,
            bottom: 0,
            left: 0,
            overflow: 'auto'
        }
    },
    main: {
        flex: 1
    },
    menuTitle: {
        padding: theme.spacing(2, 2, 1, 2)
    }
}));

const SettingsPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <aside className={classes.aside}>
                <div className={classes.asideContent}>
                    <Typography
                        className={classes.menuTitle}
                        variant="h6"
                        component="h6"
                    >
                        Настройки
                    </Typography>
                    <SettingsMenu />
                </div>
            </aside>
            <main className={classes.main}>
                <SettingsRoutes />
            </main>
        </div>
    )
};

export default SettingsPage;
