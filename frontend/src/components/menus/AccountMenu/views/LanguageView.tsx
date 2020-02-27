import React from "react";
import PopoverAppBar from "../../../core/PopoverAppBar";
import LanguagesList from "../../../core/LanguageChoiceList";
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
