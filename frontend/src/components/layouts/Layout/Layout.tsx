import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import LayoutAppBar from "./LayoutAppBar";
import NavigationMenu from "../../menus/NavigationMenu";
import LayoutDrawer from "./LayoutDrawer";

const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    }
}));

const Layout: React.FC = (props) => {
    const classes = useStyles();
    const isScreenDownSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <LayoutAppBar />
            <div className={classes.body}>
                <LayoutDrawer />
                <div className={classes.main}>
                    {props.children}
                </div>
            </div>
            {isScreenDownSm ? <NavigationMenu position="fixed" /> : null}
        </>
    )
};

export default Layout;
