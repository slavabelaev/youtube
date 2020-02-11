import React from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {createStyles, Theme, Typography} from "@material-ui/core";
import MenuItem from "../interfaces/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

export interface RouteLinksProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: MenuItem[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
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

const RouteLinks: React.FC<RouteLinksProps> = ({ items, className, ...otherProps }) => {
    const classes = useStyles();
    const renderItem = (item: MenuItem, index: number) => (
        <Typography
            key={index}
            variant="subtitle2"
            component={Link}
            to={item.to}
            className={classes.item}
        >
            {item.title}
        </Typography>
    );
    return (
        <div className={clsx(className, classes.root)} {...otherProps}>
            {items.map(renderItem)}
        </div>
    )
};

export default RouteLinks;
