import React from "react";
import {generateLanguages} from "../../services/languagesService";
import {LanguageModel} from "../../models/LanguageModel";
import SingleChoiceItem from "../common/SingleChoice/SingleChoiceItem";
import SingleChoice, {SingleChoiceProps} from "../common/SingleChoice/SingleChoice";

function LanguageList() {
    const renderItem: SingleChoiceProps['renderItem'] = (item: LanguageModel, value, setValue) => (
        <SingleChoiceItem
            label={item.label}
            value={item.code}
            selected={item.code === value}
            onSelect={() => setValue(item.code)}
        />
    );

    return (
        <SingleChoice
            initialValue="en"
            onLoad={generateLanguages}
            renderItem={renderItem}
        />
    )
}
export default LanguageList;
