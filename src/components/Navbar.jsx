import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import NavbarChoice from "./NavbarChoice";
import { useAuth } from "../contexts/AuthContext";
function Navbar() {
    const { isAuthenticated } = useAuth("state");
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    const handleProducts = () => {
        navigate("/products");
    };

    const handleContact = () => {
        navigate("/contact");
    };

    const handleSignin = () => {
        navigate("/login");
    };

    return (
        <header>
            <nav>
                <ul className="left">
                    <li><NavbarChoice title={"Inicio"} onClick={handleHome} /></li>
                    <li><NavbarChoice title={"Productos"} onClick={handleProducts} /></li>
                    <li><NavbarChoice title={"Contacto"} onClick={handleContact} /></li>
                </ul>
                <ul className="right">
                    {isAuthenticated ? (
                        <>
                            <li>Usuario</li>
                            <li><i className="fas fa-shopping-cart"></i></li>
                        </>
                    ) : (
                        <>
                            <span onClick={handleSignin}>Sign in</span>
                            <span>Sign up</span>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
