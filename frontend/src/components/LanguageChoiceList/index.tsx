import React, {useContext} from "react";
import {generateLanguages} from "../../services/languagesService";
import {LanguageModel} from "../../models/LanguageModel";
import SingleChoiceList from "../common/SingleChoice/SingleChoiceList";
import {LanguageContext} from "../../contexts/LanguageContext";

function LanguageChoiceList() {
    const context = useContext(LanguageContext);
    
    return (
        <SingleChoiceList
            initialValue={context?.language.code}
            onLoad={generateLanguages}
            fromModelToProps={(model: LanguageModel) => ({
                label: model.label,
                value: model.code
            })}
            onChange={item => context?.switchLanguage({
                label: item.label,
                code: item.value
            })}
        />
    )
}
export default LanguageChoiceList;
