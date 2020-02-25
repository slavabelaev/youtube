import React, {PropsWithChildren, ReactNode} from "react";
import ErrorPage from "../../pages/ErrorPage";

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsWithChildren<{}>, ErrorBoundaryState> {
    state = {
        hasError: false
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true });
    }

    render(): ReactNode {
        return this.state.hasError
            ? <ErrorPage />
            : this.props.children;
    }
}

export default ErrorBoundary;
