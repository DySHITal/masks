import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home";

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                
            },
        ],
    }, 
],{basename: "/Silviomasks"},
);

export default Router;
