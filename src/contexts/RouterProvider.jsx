import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const RouterContext = createContext();

function RouterProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    return (
        <RouterContext.Provider value={currentPath}>
            {children}
        </RouterContext.Provider>
    );
}

RouterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { RouterContext, RouterProvider};
