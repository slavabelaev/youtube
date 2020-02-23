import React from "react";
import Channel, {ChannelProps} from "../Channel";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Items, {ItemsProps} from "../common/Items";

export interface ChannelsProps {
    onLoad: ItemsProps['onLoad']
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))'
    },
    item: {
        padding: theme.spacing(2),
        flex: '1 20%'
    }
}));

function Channels({ onLoad }: ChannelsProps) {
    const classes = useStyles();
    const renderItem = (item: ChannelProps) => (
        <div className={classes.item}>
            <Channel {...item} />
        </div>
    );

    return (
        <div className={classes.root}>
            <Items
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </div>
    )
}

export default Channels;
