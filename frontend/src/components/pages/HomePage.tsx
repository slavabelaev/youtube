import React from "react";
import Layout from "../layouts/Layout";
import GridList from "../GridList";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heading: {
       padding: theme.spacing(2, 2, 0, 2)
    }
}));
const HomePage: React.FC = ({ children: ReactElement }) => {
    const classes = useStyles();
    return (
        <Layout>
            <>
                <Typography
                    className={classes.heading}
                    variant="h6"
                >
                    Рекомендованные
                </Typography>
                <GridList />
            </>
        </Layout>
    )
}

export default HomePage;
