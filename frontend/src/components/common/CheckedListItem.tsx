import React, {useState} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox, {CheckboxProps} from "@material-ui/core/Checkbox";
import ListItemText, {ListItemTextProps} from "@material-ui/core/ListItemText";
import ListItemSecondaryAction, {ListItemSecondaryActionProps} from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";

interface CheckedListItemBaseProps {
    primary: ListItemTextProps['primary'];
    secondary?: ListItemTextProps['secondary'];
    secondaryAction?: ListItemSecondaryActionProps['children'];
    onChange?: (checked: boolean) => void;
}

export type CheckedListItemProps = CheckboxProps & CheckedListItemBaseProps;

const CheckedListItem: React.FC<CheckedListItemProps> = ({
    primary,
    secondary,
    secondaryAction,
    onChange,
    ...CheckboxProps
}) => {
    const [checked, setChecked] = useState(Boolean(CheckboxProps.checked));
    const toggle = () => onChange ? onChange(checked) : setChecked(!checked);

    const listItemSecondaryAction = secondaryAction ? (
        <ListItemSecondaryAction>
            {secondaryAction}
        </ListItemSecondaryAction>
    ) : null;

    return (
        <ListItem
            dense
            button
            onClick={toggle}
        >
            <ListItemIcon>
                <Checkbox
                    {...CheckboxProps}
                    checked={checked}
                    onChange={toggle}
                    edge="start"
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText
                primary={primary}
                secondary={secondary}
            />
            {listItemSecondaryAction}
        </ListItem>
    )
};

export default CheckedListItem;
