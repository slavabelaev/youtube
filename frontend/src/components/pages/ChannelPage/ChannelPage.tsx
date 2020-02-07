import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ChannelToolbar from "../../ChannelToolbar";
import ChannelTabs from "./ChannelTabs";

const useStyles = makeStyles((theme: Theme) => createStyles({
    poster: {
        height: theme.spacing(25),
        backgroundColor: theme.palette.grey.A700
    },
    header: {
        maxWidth: theme.breakpoints.width('md'),
        margin: '0 auto'
    }
}));

const ChannelPage: React.FC = ({ children: ReactElement }) => {
    const classes = useStyles();

    const poster = (
        <div
            className={classes.poster}
        />
    );

    const header = (
        <header className={classes.header}>
            <ChannelToolbar />
            <ChannelTabs />
        </header>
    );

    return (
        <>
            {poster}
            {header}
        </>
    )
};

export default ChannelPage;
