import React, {ReactNode} from "react";
import {Button, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface LoadListProps<T = any> {
    renderLoadMore?: ((onClick: VoidFunction) => ReactNode) | null;
    renderItem: (item: T, index: number) => ReactNode;
    onLoad: (skip: number) => Promise<T[]>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(1, 0)
    }
}));

interface LoadMoreListState {
    initialLoaded: boolean;
    items: any;
}

function LoadList({
    renderLoadMore,
    renderItem,
    onLoad
}: LoadListProps) {
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

    const button =
        renderLoadMore === null ? null :
        renderLoadMore ? renderLoadMore(load) : (
            <div className={classes.container}>
                {initialLoaded ? (
                    <Button
                        size="small"
                        onClick={load}
                    >
                        More
                    </Button>
                ) : <CircularProgress />}
            </div>
        );

    return (
        <>
            {items.map(renderItem)}
            {button}
        </>
    );
}

export default LoadList;
