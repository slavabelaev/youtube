import React, {PropsWithChildren} from "react";

export interface MultipleProviderProps {
    providers: React.ComponentType<PropsWithChildren<any>>[]
}

function MultipleProvider({
    providers,
    children
}: PropsWithChildren<MultipleProviderProps>) {
    providers.forEach(Provider => {
        children = (
            <Provider>
                {children}
            </Provider>
        );
    });

    return (
        <>{children}</>
    );
}

export default MultipleProvider;
