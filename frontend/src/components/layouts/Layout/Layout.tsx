import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, useMediaQuery} from "@material-ui/core";
import LayoutAppBar from "./LayoutAppBar";
import NavigationMenu from "../../menus/NavigationMenu";
import LayoutDrawer, {LayoutDrawerProps} from "./LayoutDrawer";

export interface LayoutProps {
    largeScreenVariant?: LayoutDrawerProps['largeScreenVariant'];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    }
}));

const loadedOnLargeScreen = window.outerWidth > 992;
const Layout: React.FC<LayoutProps> = ({
    children,
    largeScreenVariant = 'permanent'
}) => {
    const classes = useStyles();
    const isScreenDownSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isPermanent = largeScreenVariant === 'permanent';
    const [open, setOpen] = React.useState(loadedOnLargeScreen && isPermanent);
    const toggle = () => setOpen(!open);

    return (
        <>
            <LayoutAppBar
                MenuButtonProps={{
                    onClick: toggle
                }}
            />
            <div className={classes.body}>
                <LayoutDrawer
                    largeScreenVariant={isScreenDownSm ? 'temporary' : largeScreenVariant}
                    open={open}
                    onClose={toggle}
                />
                <div className={classes.main}>
                    {children}
                </div>
            </div>
            {isScreenDownSm ? <NavigationMenu position="fixed" /> : null}
        </>
    )
};

export default Layout;
