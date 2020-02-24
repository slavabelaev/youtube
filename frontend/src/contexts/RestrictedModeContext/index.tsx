import React, {PropsWithChildren, useState} from "react";

export interface RestrictedModeContextProps {
    enabled: boolean;
    switchEnabled: (enabled: boolean) => void;
}

export const RestrictedModeContext = React.createContext<RestrictedModeContextProps | undefined>(undefined);

const RESTRICTED_MODE_STORAGE_KEY = 'restrictedModeEnabled';

function RestrictedModeProvider(props: PropsWithChildren<{}>) {
    const initialEnabled = localStorage.getItem(RESTRICTED_MODE_STORAGE_KEY) === 'true';
    const [enabled, setEnabled] = useState(initialEnabled);

    const switchEnabled: RestrictedModeContextProps['switchEnabled'] = (enabled) => {
        localStorage.setItem(RESTRICTED_MODE_STORAGE_KEY, String(enabled));
        setEnabled(enabled);
    };

    return (
        <RestrictedModeContext.Provider value={{
            enabled,
            switchEnabled
        }}>
            {props.children}
        </RestrictedModeContext.Provider>
    )
}

export default RestrictedModeProvider;
