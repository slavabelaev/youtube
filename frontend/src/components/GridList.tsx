import React from "react";
import {makeStyles, createStyles, Grid, Theme} from "@material-ui/core";
import GridItem from "./GridItem";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    }
}));
const GridList: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {Array(12).fill(null).map(item => {
                    return (
                        <Grid item xl={2} lg={3} md={6} sm={12} xs={12}>
                            <GridItem />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default GridList;
