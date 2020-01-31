import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import GridItem from "./GridItem";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    }
}));

const items = Array(12).fill(null);
const GridList: React.FC = () => {
    const classes = useStyles();

    const renderItem = (item: null) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <GridItem />
        </Grid>
    );

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {items.map(renderItem)}
            </Grid>
        </div>
    )
}

export default GridList;
