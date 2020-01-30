import React from "react";
import {BottomNavigation, createStyles, Theme} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {HOME_ROUTE, LIBRARY_ROUTE, SUBSCRIPTIONS_ROUTE, TRENDING_ROUTE} from "../../constants/routes";
import RouteItem from "../../interfaces/RouteItem";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root_vertical: {
        flexDirection: 'column',
        height: 'initial',
    },
    item_vertical: {
        minWidth: 'initial',
        whiteSpace: 'nowrap',
        minHeight: theme.spacing(9),
        padding: 0,
        '&.Mui-selected': {
            paddingTop: 0
        }
    },
    label_vertical: {
        display: 'inline-block',
        marginTop: theme.spacing(1),
        fontSize: 11
    }
}));

const items: RouteItem[] = [
    HOME_ROUTE,
    TRENDING_ROUTE,
    SUBSCRIPTIONS_ROUTE,
    LIBRARY_ROUTE
];

export interface NavigationMenuProps {
    variant?: 'vertical' | 'horizontal'
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ variant = 'horizontal' }) => {
    const classes = useStyles();
    const isVertical = variant === 'vertical';
    const renderItem = (item: RouteItem) => {
        const Icon = item.icon;
        return (
            <BottomNavigationAction
                className={isVertical ? classes.item_vertical : ''}
                label={
                    <Typography
                        className={isVertical ? classes.label_vertical : ''}
                        component="span"
                    >
                        {item.title}
                    </Typography>
                }
                icon={<Icon />}
                component={NavLink}
                to={item.to}
                activeClassName="Mui-selected"
            />
        )
    };
    return (
        <BottomNavigation
            className={isVertical ? classes.root_vertical : ''}
            showLabels
        >
            {items.map(renderItem)}
        </BottomNavigation>
    )
};

export default NavigationMenu;
