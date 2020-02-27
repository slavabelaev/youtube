import React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Category, {CategoryProps} from "../../components/common/Category";
import Divider from "@material-ui/core/Divider";
import {generateListVideos} from "../../services/videosService";
import Videos from "../../components/core/Videos";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        margin: 'auto'
    },
    header: {
        display: 'flex'
    },
    main: {
        padding: theme.spacing(3, 0)
    },
    category: {
        padding: theme.spacing(2)
    }
}));

function TrendingPage() {
    const classes = useStyles();
    const categories: CategoryProps[] = [
        { title: 'Music', avatarSrc: '' },
        { title: 'Gaming', avatarSrc: '' },
        { title: 'News', avatarSrc: '' },
        { title: 'Films', avatarSrc: '' },
    ];

    const renderCategory = (item: CategoryProps) => (
        <div className={classes.category}>
            <Category {...item} />
        </div>
    );

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                {categories.map(renderCategory)}
            </header>
            <Divider />
            <main className={classes.main}>
                <Videos
                    onLoad={generateListVideos}
                />
            </main>
        </div>
    )
}

export default TrendingPage;
