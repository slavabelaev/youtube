import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AccountMenu from "../menus/AccountMenu";
import PopoverButton from "./PopoverButton";

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    paper: {
        width: '100%',
        maxWidth: 300
    },
    iconButton: {
        padding: theme.spacing(1)
    }
}));

const AccountPopoverButton: React.FC = () => {
    const classes = useStyles();

    const avatar = (
        <Avatar
            className={classes.avatar}
        />
    );

    return (
        <PopoverButton
            className={classes.iconButton}
            edge="end"
            content={<AccountMenu />}
            PopoverPaperProps={{
                className: classes.paper
            }}
        >
            {avatar}
        </PopoverButton>
    );
};

export default AccountPopoverButton;
