import React, {Dispatch, ReactElement, ReactNode, SetStateAction, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import ListItemText, {ListItemTextProps} from "@material-ui/core/ListItemText";
import {List} from "@material-ui/core";
import Items, {ItemsProps} from "./Items";

export interface SingleChoiceItemProps {
    label: ListItemTextProps['primary'];
    value: string;
    selected: boolean;
    onSelect?: () => void;
}

export function SingleChoiceItem(props: SingleChoiceItemProps) {
    return (
        <ListItem
            dense
            button
            onClick={props.onSelect}
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

export interface SingleChoiceListProps<T = any> {
    onLoad: ItemsProps['onLoad'];
    renderItem: (
        item: T,
        value: SingleChoiceItemProps['value'],
        setValue: Dispatch<SetStateAction<SingleChoiceItemProps['value']>>
    ) => ReactElement<SingleChoiceItemProps>;
    initialValue?: SingleChoiceItemProps['value'];
}

function SingleChoiceList({
    onLoad,
    renderItem,
    initialValue = ''
}: SingleChoiceListProps) {
    const [value, setValue] = useState(initialValue);

    return (
        <List>
            <Items
                renderLoadMore={null}
                renderItem={
                    (item) => renderItem(item, value, setValue)
                }
                onLoad={onLoad}
            />
        </List>
    );
}

export default SingleChoiceList;
