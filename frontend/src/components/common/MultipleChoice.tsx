import CheckboxListItem from "./CheckboxListItem";
import LockIcon from "@material-ui/icons/Lock";
import List from "@material-ui/core/List";
import Items, {ItemsProps} from "./Items";
import React from "react";

export interface MultiChoiceListItemProps {
    label: string;
    value: string;
}

export interface MultipleChoiceListProps {
    onLoad: ItemsProps['onLoad'];
    fromModelToProps: (item: any) => MultiChoiceListItemProps
}

function MultipleChoiceList({
    onLoad,
    fromModelToProps
}: MultipleChoiceListProps) {
    const renderItem = (model: any) => {
        const item: MultiChoiceListItemProps = fromModelToProps(model);
        return (
            <CheckboxListItem
                key={item.value}
                primary={item.label}
                secondaryAction={
                    <LockIcon color="action" />
                }
            />
        )
    };

    return (
        <List disablePadding>
            <Items
                onLoad={onLoad}
                renderItem={renderItem}
            />
        </List>
    )
}

export default MultipleChoiceList;
