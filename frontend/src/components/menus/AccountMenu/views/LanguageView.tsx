import React from "react";
import PopoverAppBar from "../../../PopoverAppBar";
import LanguagesList from "../../../LanguageChoiceList";
import {AccountMenuViewProps} from "../AccountMenuViewProps";

export interface LanguageViewProps extends AccountMenuViewProps {}

function LanguageView({ onBack }: LanguageViewProps) {
    return (
        <div>
            <PopoverAppBar
                title="Choose your language"
                onBack={onBack}
            />
            <LanguagesList />
        </div>
    )
}

export default LanguageView;
