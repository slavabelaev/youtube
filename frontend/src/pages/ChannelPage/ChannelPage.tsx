import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ChannelToolbar from "../../components/ChannelToolbar";
import ChannelTabs from "./ChannelTabs";
import {generateBackgroundImageStyles} from "./styles";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        poster: {
            height: theme.spacing(25),
            ...generateBackgroundImageStyles(theme)
        },
        header: {
            maxWidth: theme.breakpoints.width('md'),
            margin: '0 auto'
        }
    })
});

const ChannelPage: React.FC = () => {
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
