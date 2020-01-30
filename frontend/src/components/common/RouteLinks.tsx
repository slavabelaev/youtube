import React from "react";
import {Link} from "react-router-dom";
import {createStyles, Theme, Typography} from "@material-ui/core";
import RouteItem from "../../interfaces/RouteItem";
import {makeStyles} from "@material-ui/core/styles";

export interface RouteLinksProps {
    items: RouteItem[]
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
        '&+section': {
            paddingTop: 0
        }
    },
    item: {
        display: 'inline-block',
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: theme.spacing(1),
        '&:visited': {
            color: theme.palette.text.secondary
        }
    }
}));
const RouteLinks: React.FC<RouteLinksProps> = ({ items }) => {
    const classes = useStyles();
    const renderItem = (item: RouteItem) => (
        <Typography
            variant="subtitle2"
            component={Link}
            to={item.to}
            className={classes.item}
        >
            {item.title}
        </Typography>
    );
    return (
        <div className={classes.root}>
            {items.map(renderItem)}
        </div>
    )
};

export default RouteLinks;
