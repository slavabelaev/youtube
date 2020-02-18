import {makeStyles} from "@material-ui/core/styles";
import {createStyles, List, Theme} from "@material-ui/core";
import React from "react";
import Comment, {CommentProps} from "./Comment";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Collapse from "@material-ui/core/Collapse";
import LoadList from "../common/LoadList";
import {generateComments} from "../../services/commentsService";

export interface AnswersProps {
    commentId: CommentProps['id'];
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

const Answers: React.FC<AnswersProps> = ({ commentId }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const renderItem = (item: CommentProps) => (
        <>
            <Comment
                {...item}
                key={item.id}
                variant="mini"
            />
        </>
    );

    const toolbar = (
        <Toolbar className={classes.toolbar}>
            <Button
                size="small"
                color="secondary"
                startIcon={<ArrowDropDownIcon />}
                onClick={toggle}
            >
                {open ? 'Скрыть' : 'Показать'} ответы
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
                <List>
                    <LoadList
                        renderItem={renderItem}
                        onLoad={generateComments}
                    />
                </List>
            </Collapse>
        </>
    );
};

export default Answers;
