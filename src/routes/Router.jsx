import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home";
import Productos from "../components/Productos";
import Login from "../components/Login";

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                
            },
            {
                path: "/products",
                element: <Productos />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    }, 
],{basename: "/Silviomasks"},
);

export default Router;
