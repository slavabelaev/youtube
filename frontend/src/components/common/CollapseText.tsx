import React, {HTMLProps} from "react";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface CollapseText extends HTMLProps<HTMLDivElement> {
    initialText: string;
    additionalText?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    collapse: {
        marginBottom: theme.spacing(1)
    }
}));

function CollapseText({ initialText, additionalText, ...otherProps }: CollapseText) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const renderText = (text: string) => (
        <Typography variant="body1">
            {text}
        </Typography>
    );

    const collapse = (
        <Collapse in={open} className={classes.collapse}>
            {renderText(additionalText || '')}
        </Collapse>
    );

    const button = (
        <Button
            variant="text"
            size="small"
            onClick={toggle}
        >
            {open ? 'Show less' : 'Show more'}
        </Button>
    );

    return (
        <div {...otherProps}>
            {renderText(initialText)}
            {additionalText ? collapse : null}
            {additionalText ? button : null}
        </div>
    )
}

export default CollapseText;
