import React, {Dispatch, ReactElement, SetStateAction, useState} from "react";
import {List} from "@material-ui/core";
import Items, {ItemsProps} from "../Items";
import {SingleChoiceItemProps} from "./SingleChoiceItem";

export interface SingleChoiceProps<T = any> {
    onLoad: ItemsProps['onLoad'];
    renderItem: (
        item: T,
        value: SingleChoiceItemProps['value'],
        setValue: Dispatch<SetStateAction<SingleChoiceItemProps['value']>>
    ) => ReactElement<SingleChoiceItemProps>;
    initialValue?: SingleChoiceItemProps['value'];
}

function SingleChoice({
    onLoad,
    renderItem,
    initialValue = ''
}: SingleChoiceProps) {
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

export default SingleChoice;
