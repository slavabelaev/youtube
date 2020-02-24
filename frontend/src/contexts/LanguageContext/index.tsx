import React, {PropsWithChildren, useState} from "react";
import {LanguageModel} from "../../models/LanguageModel";

export interface LanguageContextProps {
    language: LanguageModel;
    switchLanguage: (language: LanguageModel) => void;
}

export const LanguageContext = React.createContext<LanguageContextProps | undefined>(undefined);

function LanguageProvider(props: PropsWithChildren<{}>) {
    const [language, setLanguage] = useState<LanguageModel>({
        label: 'English',
        code: 'en'
    });

    const switchLanguage: LanguageContextProps['switchLanguage'] = (language) => {
        setLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{
            language,
            switchLanguage
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;
