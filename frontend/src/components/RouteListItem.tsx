import React from "react";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, ListItemIcon, Theme} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {MenuItem} from "./MenuListItem";
import {makeStyles} from "@material-ui/core/styles";

export interface RouteListItemProps extends MenuItem {}

const useStyles = makeStyles((theme: Theme) => createStyles({
    title: {
        display: 'block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));

const RouteListItem: React.FC<RouteListItemProps> = ({ icon, to, exact = false, title }) => {
    const classes = useStyles();

    const renderIcon = () => {
        if (!icon) return;
        const Icon = icon;
        return (
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
        );
    };

    return (
        <ListItem
            button
            dense
            component={NavLink}
            to={to}
            exact={exact}
            activeClassName="Mui-selected"
        >
            {renderIcon()}
            <ListItemText
                primary={
                    <span className={classes.title}>
                        {title}
                    </span>
                }
            />
        </ListItem>
    )
};

export default RouteListItem;
