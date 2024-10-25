import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home";
import Productos from "../components/Productos";
import Login from "../components/Login";
import Contacto from "../components/Contacto";

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
            {
                path: "/contact",
                element: <Contacto />,
            },
        ],
    }, 
],{basename: "/Silviomasks"},
);

export default Router;
