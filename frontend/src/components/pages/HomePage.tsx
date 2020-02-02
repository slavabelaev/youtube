import React from "react";
import GridList from "../GridList";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../layouts/Layout";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heading: {
       padding: theme.spacing(2, 2, 0, 2)
    }
}));

const HomePage: React.FC = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Typography
                className={classes.heading}
                variant="h6"
            >
                Рекомендованные
            </Typography>
            <GridList />
        </Layout>
    )
};

export default HomePage;
