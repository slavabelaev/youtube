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
        width: 240
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
                <Typography
                    className={classes.menuTitle}
                    variant="h6"
                    component="h6"
                >
                    Настройки
                </Typography>
                <SettingsMenu />
            </aside>
            <main>
                <SettingsRoutes />
            </main>
        </div>
    )
};

export default SettingsPage;
