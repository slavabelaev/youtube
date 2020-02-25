import React, {PropsWithChildren} from "react";
import Component, {LayoutProps} from "./Layout";
import {useScrollTop} from "../../hooks/useScrollTop";
import ErrorBoundary from "./ErrorBoundary";

function Layout(props: PropsWithChildren<LayoutProps>) {
    useScrollTop();
    return (
        <Component {...props}>
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </Component>
    )
}

export default Layout;
