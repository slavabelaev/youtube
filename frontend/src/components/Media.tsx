import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import clsx from "clsx";
import {Box, BoxProps} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey.A700,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white
    }
}));

export interface MediaProps extends BoxProps {
    imageUrl: string;
    [key: string]: any;
}

const Media: React.FC<MediaProps> = ({ imageUrl, className, style, ...otherProps }) => {
    const classes = useStyles();
    return (
        <Box
            {...otherProps}
            className={clsx(classes.root, className)}
            style={{
                ...style,
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <PlayArrowIcon fontSize="large" />
        </Box>
    )
};

export default Media;
