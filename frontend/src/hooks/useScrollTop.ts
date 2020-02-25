import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

/*
 * Registers a history listener on mount which
 * scrolls to the top of the page on route change
 */
export const useScrollTop = () => {
    const history = useHistory();
    useEffect(() => {
        return history.listen(() => {
            window.scrollTo(0, 0);
        });
    }, [history]);
};
