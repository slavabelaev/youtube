import React, {useState} from "react";
import {List} from "@material-ui/core";
import Items, {ItemsProps} from "../Items";
import SingleChoiceItem, {SingleChoiceItemBaseProps, SingleChoiceItemProps} from "./SingleChoiceItem";

export interface SingleChoiceListProps<T = any> {
    onLoad: ItemsProps['onLoad'];
    fromModelToProps: (model: any) => SingleChoiceItemBaseProps;
    variant?: SingleChoiceItemProps['variant'];
    initialValue?: SingleChoiceItemProps['value'];
    onChange?: (item: SingleChoiceItemBaseProps) => void;
}

function SingleChoiceList({
    variant,
    onLoad,
    fromModelToProps,
    initialValue = '',
    onChange
}: SingleChoiceListProps) {
    const [value, setValue] = useState(initialValue);

    const renderItem = (model: any) => {
        const item = fromModelToProps(model);
        return (
            <SingleChoiceItem
                {...item}
                variant={variant}
                checked={value === item.value}
                onClick={() => {
                    setValue(item.value);
                    if (onChange) onChange(item);
                }}
            />
        )
    };

    return (
        <List>
            <Items
                renderLoadMore={null}
                renderItem={renderItem}
                onLoad={onLoad}
            />
        </List>
    );
}

export default SingleChoiceList;
