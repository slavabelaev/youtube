import React, {ReactNode} from "react";
import {Button, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface LoadMoreListProps<T = any> {
    renderItem: (item: T, index: number) => ReactNode;
    onLoad: (skip: number) => Promise<T[]>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(1)
    }
}));

interface LoadMoreListState {
    initialLoaded: boolean;
    items: any;
}

const LoadMoreList: React.FC<LoadMoreListProps> = ({
    renderItem,
    onLoad
}) => {
    const classes = useStyles();
    const [{ items, initialLoaded }, setState] = React.useState<LoadMoreListState>({
        initialLoaded: false,
        items: []
    });

    const load: VoidFunction = async () => {
        const loadedItems = await onLoad(items.length);
        setState({
            initialLoaded: true,
            items: [...items, ...loadedItems]
        });
    };

    if (!initialLoaded) load();

    const button = (
        <Button onClick={load}>
            Еще
        </Button>
    );

    return (
        <>
            {items.map(renderItem)}
            <div className={classes.container}>
                {initialLoaded ? button : <CircularProgress />}
            </div>
        </>
    );
};

export default LoadMoreList;
