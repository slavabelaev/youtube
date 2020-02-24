import React, {useContext} from "react";
import {generateLanguages} from "../../services/languagesService";
import {LanguageModel} from "../../models/LanguageModel";
import SingleChoiceItem from "../common/SingleChoice/SingleChoiceItem";
import SingleChoice, {SingleChoiceProps} from "../common/SingleChoice/SingleChoice";
import {LanguageContext} from "../../contexts/LanguageContext";

function LanguageList() {
    const context = useContext(LanguageContext);

    const renderItem: SingleChoiceProps['renderItem'] = (item: LanguageModel, value, setValue) => (
        <SingleChoiceItem
            label={item.label}
            value={item.code}
            selected={item.code === value}
            onClick={() => {
                setValue(item.code);
                context?.switchLanguage(item);
            }}
        />
    );

    return (
        <SingleChoice
            initialValue={context?.language.code}
            onLoad={generateLanguages}
            renderItem={renderItem}
        />
    )
}
export default LanguageList;
