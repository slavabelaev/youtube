import ListItemText, {ListItemTextProps} from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

export interface SingleChoiceItemProps {
    label: ListItemTextProps['primary'];
    value: string;
    selected: boolean;
    onClick: () => void;
}

function SingleChoiceItem(props: SingleChoiceItemProps) {
    return (
        <ListItem
            dense
            button
            onClick={props.onClick}
        >
            <ListItemIcon>
                {props.selected ? <CheckIcon /> : <></>}
            </ListItemIcon>
            <ListItemText
                primary={props.label}
            />
        </ListItem>
    )
}

export default SingleChoiceItem;
