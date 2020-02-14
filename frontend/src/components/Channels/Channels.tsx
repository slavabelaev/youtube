import React from "react";
import Channel, {ChannelProps} from "../Channel";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoadList, {LoadListProps} from "../LoadList";

export interface ChannelsProps {
    onLoad: LoadListProps['onLoad']
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

const Channels: React.FC<ChannelsProps> = ({ onLoad }) => {
    const classes = useStyles();
    const renderItem = (item: ChannelProps) => (
        <div className={classes.item}>
            <Channel {...item} />
        </div>
    );

    return (
        <div className={classes.root}>
            <LoadList
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </div>
    )
};

export default Channels;
