import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginBottom: theme.spacing(4)
        }
    },
    main: {
        flex: 1,
        padding: theme.spacing(0, 2)
    },
    aside: {
        flex: 1,
        [theme.breakpoints.up('md')]: {
            maxWidth: 320,
        },
        padding: theme.spacing(0, 2)
    },
    section: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    links: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    linkItem: {
        display: 'block'
    },
    details: {
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'max-content auto'
    },
    detailTitle: {
        marginRight: theme.spacing(2)
    },
    detailValue: {}
}));

interface LinkProps {
    href: string;
    label: string;
}

interface DetailProps {
    label: string;
    value: string;
}

function ChannelAboutPage() {
    const classes = useStyles();

    const description: string = 'Channel description';

    const links: LinkProps[] = [
        { label: 'Twitter', href: 'https://twitter.com/' },
        { label: 'Facebook', href: 'https://facebook.com/' },
        { label: 'Instagram', href: 'https://instagram.com/' },
        { label: 'Blogger', href: 'https://blogspot.com/' },
    ];

    const stats: string[] = [
        'Joined Sept 18, 2005',
        '2 855 767 413 views'
    ];
    
    const details: DetailProps[] = [
        { label: 'Country', value: 'USA' },
        { label: 'Name', value: 'Value' },
        { label: 'Long name', value: 'Value' },
    ];

    const renderDetail = (item: DetailProps) => (
        <>
            <Typography
                className={classes.detailTitle}
                variant="body2"
                color="textSecondary"
                component="dt"
            >
                {item.label}:
            </Typography>
            <Typography
                className={classes.detailValue}
                variant="body2"
                color="textSecondary"
                component="dd"
            >
                {item.value}
            </Typography>
        </>
    );

    const detailsNode = (
        <dl className={classes.details}>
            {details.map(renderDetail)}
        </dl>
    );

    const renderLink = (item: LinkProps) => (
        <Typography
            className={classes.linkItem}
            component={Link}
            href={item.href}
            target="_blank"
        >
            {item.label}
        </Typography>
    );

    const linksList = (
        <div className={classes.links}>
            {links.map(renderLink)}
        </div>
    );

    const renderTitle = (title: string) => (
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>
    );

    const renderStatItem = (text: string) => (
        <ListItem disableGutters divider>
            <ListItemText
                primary={text}
            />
        </ListItem>
    );

    const statsList = (
        <List disablePadding>
            {stats.map(renderStatItem)}
        </List>
    );

    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <section className={classes.section}>
                    {renderTitle('Description')}
                    <Typography>
                        {description}
                    </Typography>
                </section>
                <Divider />
                <section className={classes.section}>
                    {renderTitle('Details')}
                    {detailsNode}
                </section>
                <Divider />
                <section className={classes.section}>
                    {renderTitle('Links')}
                    {linksList}
                </section>
            </main>
            <aside className={classes.aside}>
                <section className={classes.section}>
                    {renderTitle('Stats')}
                    {statsList}
                </section>
            </aside>
        </div>
    )
}

export default ChannelAboutPage;
