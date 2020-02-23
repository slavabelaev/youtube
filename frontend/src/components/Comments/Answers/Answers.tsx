import React, {ReactNode} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Collapse from "@material-ui/core/Collapse";

export interface AnswersProps {
    body: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        padding: theme.spacing(0, 0, 0, 7),
        minHeight: 'initial'
    },
    collapse: {
        paddingLeft: theme.spacing(7)
    }
}));

function Answers({
    body
}: AnswersProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const toolbar = (
        <Toolbar className={classes.toolbar}>
            <Button
                size="small"
                color="secondary"
                startIcon={<ArrowDropDownIcon />}
                onClick={toggle}
            >
                {open ? 'Hide' : 'View'} replies
            </Button>
        </Toolbar>
    );

    return (
        <>
            {toolbar}
            <Collapse
                className={classes.collapse}
                in={open}
                unmountOnExit
            >
                {body}
            </Collapse>
        </>
    );
}

export default Answers;
