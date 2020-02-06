import React, {useState} from "react";
import {Theme, useMediaQuery} from "@material-ui/core";

export interface LayoutDrawerProps {
    open: boolean;
    variant?: 'temporary' | 'permanent';
}

export interface LayoutDrawerContextProps {
    state?: LayoutDrawerProps,
    actions?: {
        setVariant: (variant: LayoutDrawerProps['variant'], open?: LayoutDrawerProps['open']) => void;
        toggle: () => void;
    }
}

const LayoutDrawerContext = React.createContext<LayoutDrawerContextProps>({});

export const LayoutDrawerProvider: React.FC = (props) => {
    const [state, setState] = useState<LayoutDrawerProps>({
        variant: 'temporary',
        open: false
    });

    const setVariant = (variant: LayoutDrawerProps['variant'], open: LayoutDrawerProps['open'] = false) => {
        if (state.variant !== variant) setState({...state, variant, open });
    };

    const toggle = () => setState(state => ({...state, open: !state.open}));

    return (
        <LayoutDrawerContext.Provider value={{
            state,
            actions: {
                setVariant,
                toggle
            }
        }}>
            {props.children}
        </LayoutDrawerContext.Provider>
    )
};

export default LayoutDrawerContext
