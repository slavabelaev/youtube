import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";
import {Radio} from "@material-ui/core";

export interface SingleChoiceItemBaseProps {
    label: string;
    value: string;
}

export interface SingleChoiceItemProps extends SingleChoiceItemBaseProps {
    variant?: 'check' | 'radio';
    checked?: boolean;
    onClick?: () => void;
}

function SingleChoiceItem({
    label,
    value,
    variant ,
    checked,
    onClick
}: SingleChoiceItemProps) {
    const icon = variant === 'check' ? (
        <Radio
            checked={checked}
            icon={<CheckIcon style={{opacity: 0}} />}
            checkedIcon={<CheckIcon />}
        />
    ) : (
        <Radio
            checked={checked}
        />
    );

    return (
        <ListItem
            dense
            button
            selected={checked}
            onClick={onClick}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={label}
            />
        </ListItem>
    )
}

export default SingleChoiceItem;
