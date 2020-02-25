import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3)
    }
}));

interface DescriptionBoxProps {
    paragraphs: string[]
}

function DescriptionBox({ paragraphs }: DescriptionBoxProps) {
    const classes = useStyles();

    const renderItem = (text: string, index: number) => (
        <Typography
            component="p"
            gutterBottom
            key={index}
        >
            {text}
        </Typography>
    );

    return (
        <div className={classes.root}>
            {paragraphs.map(renderItem)}
        </div>
    );
}

export default DescriptionBox;
