import React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import VideosList from "../../components/VideosList";
import Category, {CategoryProps} from "../../components/Category";
import Divider from "@material-ui/core/Divider";

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

const TrendingPage: React.FC = () => {
    const classes = useStyles();
    const categories: CategoryProps[] = [
        { title: 'Музыка', avatarSrc: '' },
        { title: 'Видеоигры', avatarSrc: '' },
        { title: 'Новости', avatarSrc: '' },
        { title: 'Фильмы', avatarSrc: '' },
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
                <VideosList />
            </main>
        </div>
    )
};

export default TrendingPage;
