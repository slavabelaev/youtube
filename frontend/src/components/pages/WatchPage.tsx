import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Layout from "../layouts/Layout";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {}
}));

const WatchPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Layout drawerVariantUpSm="temporary">
            <div>1231</div>
        </Layout>
    )
};

export default WatchPage;
