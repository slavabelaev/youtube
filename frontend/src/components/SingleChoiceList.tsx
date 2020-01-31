import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckIcon from "@material-ui/icons/Check";
import ListItemText from "@material-ui/core/ListItemText";
import {List} from "@material-ui/core";

export interface SingleChoiceItemProps {
    title: string;
    selected?: boolean;
    value: any;
}

export interface SingleChoiceListProps {
    items: SingleChoiceItemProps[]
}

const SingleChoiceList: React.FC<SingleChoiceListProps> = ({ items }) => {
    const renderItem = (item: SingleChoiceItemProps) => {
        return (
            <ListItem dense button>
                <ListItemIcon>
                    {item.selected ? <CheckIcon /> : <></>}
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                />
            </ListItem>
        )
    };

    return (
        <List>
            {items.map(renderItem)}
        </List>
    );
};

export default SingleChoiceList;
