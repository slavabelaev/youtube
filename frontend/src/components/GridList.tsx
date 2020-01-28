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
                        <Grid item xl={4} lg={3} md={2} sm={1} xs={1}>
                            <GridItem />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default GridList;
