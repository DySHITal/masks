import { useContext } from "react";
import { RouterContext } from "./RouterProvider";

function useCurrentPath() {
    return useContext(RouterContext)
}

export default useCurrentPath;