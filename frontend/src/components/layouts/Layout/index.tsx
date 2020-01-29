import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import React, {ReactElement} from "react";
import LayoutAppBar from "./LayoutAppBar";
import LayoutDrawer from "./LayoutDrawer";

const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        display: 'flex',
    },
    main: {
        flex: 1
    }
}));

export interface LayoutProps {
    children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => setOpen(!open);
    return (
        <>
            <LayoutAppBar
                menuButtonProps={{
                    onClick: toggleDrawer
                }}
            />
            <div className={classes.body}>
                <LayoutDrawer
                    open={open}
                    onClose={toggleDrawer}
                />
                <div className={classes.main}>
                    {children}
                </div>
            </div>
        </>
    )
};

export default Layout;
