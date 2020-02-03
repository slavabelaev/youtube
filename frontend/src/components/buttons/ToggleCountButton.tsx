import React, {ReactNode} from "react";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import {createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export interface ToggleCountButtonProps extends IconButtonProps {
    value?: number;
    checked?: boolean;
    icon?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle',
    },
    typography: {
        cursor: 'pointer',
        userSelect: 'none',
        paddingRight: theme.spacing(1)
    }
}));

const ToggleCountButton: React.FC<ToggleCountButtonProps> = ({
    value=  0,
    checked = false,
    icon,
    onClick,
    ...iconButtonProps
}) => {
    const classes = useStyles();
    const color = checked ? 'secondary' : undefined;
    const id = (+new Date()).toString(16);

    const valueBox = (
        <Typography
            className={classes.typography}
            color={color}
            component="label"
            htmlFor={id}
        >
            {value}
        </Typography>
    );

    return (
        <div className={classes.root}>
            <IconButton
                {...iconButtonProps}
                id={id}
                onClick={onClick}
                color={color}
            >
                {icon ? icon : value}
            </IconButton>
            {(icon && value) ? valueBox : null}
        </div>
    );
};

export default ToggleCountButton;
