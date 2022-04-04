import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const ScrollToTop = () => {


    function ScrollToTop({ history }) {
        useEffect(() => {
            const unlisten = history.listen(() => {
                window.scrollTo(0, 0);
            });
            return () => {
                unlisten();
            }
        }, []);

        return (null);
    }

    return (
        <div>
s
        </div>
    );
};

export default withRouter(ScrollToTop);