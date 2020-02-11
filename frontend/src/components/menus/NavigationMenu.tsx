import React from "react";
import {BottomNavigation, BottomNavigationProps, createStyles, Theme} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RouteItem from "../../interfaces/RouteItem";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import {HOME_ROUTE} from "../../pages/HomePage";
import {TRENDING_ROUTE} from "../../pages/TrendingPage";
import {SUBSCRIPTIONS_ROUTE} from "../../pages/SubscriptionsPage";
import {LIBRARY_ROUTE} from "../../pages/LibraryPage";

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
    item_horizontal: {
        minWidth: 'initial'
    },
    label_vertical: {
        display: 'inline-block',
        marginTop: theme.spacing(1),
        fontSize: 11
    },
    root_fixed: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    spaceFiller: {
        height: theme.spacing(7)
    }
}));

export interface NavigationMenuProps extends BottomNavigationProps {
    variant?: 'vertical' | 'horizontal',
    position?: 'fixed' | 'static'
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
    variant = 'horizontal',
    position = 'static',
    className,
    ...otherProps
}) => {
    const classes = useStyles();
    const isVertical = variant === 'vertical';

    const items: RouteItem[] = [
        HOME_ROUTE,
        TRENDING_ROUTE,
        SUBSCRIPTIONS_ROUTE,
        LIBRARY_ROUTE
    ];

    const renderVerticalLabel = (title: string) => (
        <Typography
            className={classes.label_vertical}
            component="span"
        >
            {title}
        </Typography>
    );

    const renderItem = (item: RouteItem, index: number) => {
        const Icon = item.icon || (() => null);
        return (
            <BottomNavigationAction
                key={index}
                className={isVertical ? classes.item_vertical : classes.item_horizontal}
                label={isVertical ? renderVerticalLabel(item.title) : item.title}
                icon={<Icon />}
                component={NavLink}
                to={item.to}
                activeClassName="Mui-selected"
            />
        )
    };

    return (
        <>
            <BottomNavigation
                className={clsx(className, {
                    [classes.root_vertical] : isVertical,
                    [classes.root_fixed]: position === 'fixed'
                })}
                showLabels
                {...otherProps}
            >
                {items.map(renderItem)}
            </BottomNavigation>
            <div className={classes.spaceFiller} />
        </>
    )
};

export default NavigationMenu;
