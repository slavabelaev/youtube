import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ChannelToolbar from "../../components/ChannelToolbar";
import ChannelTabs from "./ChannelTabs";
import {generateBackgroundImageStyles} from "./styles";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        poster: {
            position: 'relative',
            height: theme.spacing(25),
            ...generateBackgroundImageStyles(theme)
        },
        header: {
            maxWidth: theme.breakpoints.width('md'),
            margin: '0 auto'
        },
        socialLinks: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            right: theme.spacing(2),
            bottom: theme.spacing(2),
            background: 'rgba(0,0,0,.24)',
            margin: 0,
            padding: theme.spacing(1),
            borderRadius: theme.shape.borderRadius
        },
        socialLink: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: theme.spacing(3),
            height: theme.spacing(3),
            borderRadius: '50%',
            backgroundColor: theme.palette.grey["800"],
            textDecoration: 'none',
            color: theme.palette.text.primary,
            '&:not(:last-child)': {
                marginRight: theme.spacing(1)
            }
        }
    })
});

function ChannelPage() {
    const classes = useStyles();

    const renderSocialLink = (item: string, index: number) => (
        <a
            href="#"
            className={classes.socialLink}
            key={index}
        />
    );

    const poster = (
        <div
            className={classes.poster}
        >
            <ul className={classes.socialLinks}>
                {Array(5).fill(null).map(renderSocialLink)}
            </ul>
        </div>
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
}

export default ChannelPage;
