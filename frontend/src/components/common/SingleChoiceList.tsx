import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import ListItemText from "@material-ui/core/ListItemText";
import {List} from "@material-ui/core";
import LoadList, {LoadListProps} from "./LoadList";

export interface SingleChoiceItemModel {
    title: string;
    selected?: boolean;
    value: any;
}

export interface SingleChoiceItemProps extends SingleChoiceItemModel {
}

export interface SingleChoiceListProps {
    onLoad: LoadListProps['onLoad']
}

function SingleChoiceList({ onLoad }: SingleChoiceListProps) {
    const renderItem = (item: SingleChoiceItemProps, index: number) => (
        <ListItem dense button key={index}>
            <ListItemIcon>
                {item.selected ? <CheckIcon /> : <></>}
            </ListItemIcon>
            <ListItemText
                primary={item.title}
            />
        </ListItem>
    );

    return (
        <List>
            <LoadList
                renderLoadMore={null}
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    );
};

export default SingleChoiceList;
