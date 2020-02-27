import React, {useState} from "react";
import VideosGrid from "./VideosGrid";
import {ItemsProps} from "../../common/Items";
import VideosList from "./VideosList";
import Toolbar from "@material-ui/core/Toolbar";
import {createStyles, Theme, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewListIcon from "@material-ui/icons/ViewList";
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

export interface VideosProps {
    initialVariant?: 'grid' | 'list';
    onLoad: ItemsProps['onLoad'];
    title?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbarAside: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    }
}));

function Videos({
    initialVariant = 'list',
    onLoad,
    title
}: VideosProps) {
    const classes = useStyles();
    const [variant, setVariant] = useState(initialVariant);

    const toolbar = title ? (
        <Toolbar disableGutters>
            <Typography
                variant="h6"
            >
                {title}
            </Typography>
            <aside className={classes.toolbarAside}>
                <Tooltip title="Grid">
                    <IconButton
                        color={variant === 'grid' ? 'secondary' : 'default'}
                        onClick={() => setVariant('grid')}
                    >
                        <ViewModuleIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="List">
                    <IconButton
                        edge="end"
                        color={variant === 'list' ? 'secondary' : 'default'}
                        onClick={() => setVariant('list')}
                    >
                        <ViewListIcon />
                    </IconButton>
                </Tooltip>
            </aside>
        </Toolbar>
    ) : null;

    const videos = (variant === 'grid') ? (
        <VideosGrid onLoad={onLoad} />
    ) : (
        <VideosList onLoad={onLoad} />
    );

    return (
        <>
            {toolbar}
            {videos}
        </>
    )
}

export default Videos;
