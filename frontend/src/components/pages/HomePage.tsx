import React from "react";
import GridList from "../GridList";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heading: {
       padding: theme.spacing(2, 2, 0, 2)
    }
}));

const HomePage: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Typography
                className={classes.heading}
                variant="h6"
            >
                Рекомендованные
            </Typography>
            <GridList />
        </>
    )
};

export default HomePage;
