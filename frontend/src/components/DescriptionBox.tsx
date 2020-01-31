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

const DescriptionBox: React.FC<DescriptionBoxProps> = ({ paragraphs }) => {
    const classes = useStyles();

    const renderItem = (text: string) => (
        <Typography component="p">
            {text}
        </Typography>
    );

    return (
        <div className={classes.root}>
            {paragraphs.map(renderItem)}
        </div>
    );
};

export default DescriptionBox;
