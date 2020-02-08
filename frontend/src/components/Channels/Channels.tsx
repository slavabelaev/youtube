import React from "react";
import Channel, {ChannelProps} from "../Channel";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export interface ChannelsProps {
    items: ChannelProps[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    },
    item: {
        padding: theme.spacing(2)
    }
}));

const Channels: React.FC<ChannelsProps> = ({ items }) => {
    const classes = useStyles();
    const renderItem = (item: ChannelProps) => (
        <div className={classes.item}>
            <Channel {...item} />
        </div>
    );

    return (
        <div className={classes.root}>
            {items.map(renderItem)}
        </div>
    )
};

export default Channels;
