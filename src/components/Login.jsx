import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth("actions");
    
    function handleSubmit(event) {
        event.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch("URL", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("No se pudo iniciar sesión");
                    }
                    return response.json();
                })
                .then((responseData) => {
                    const { token } = responseData;
                    fetch("URL", {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Error al obtener el perfil del usuario");
                            }
                            return response.json();
                        })
                        .then((profileData) => {
                            console.log(`User ${profileData.first_name}`);
                            login(token, profileData.user__id, profileData.first_name);
                        });
                })
                .catch((error) => {
                    console.error("Error al iniciar sesión", error);
                    setIsError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    const handleSignUp = () => {
        navigate('/register');
    }

    const handlePassword = () => {
        navigate('/recover');
    }

    return (
        <div className="body">
            <div className="loginContainer">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <h2 >Inicio de Sesión</h2>
                    <div>
                        <label className="label">Username</label>
                        <div>
                            <input
                                className="input-field"
                                type="text"
                                name="username"
                                id="username"
                                required
                                ref={usernameRef}
                            />
                            <span className="icons">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <div>
                            <input
                                className="input-field"
                                type="password"
                                name="password"
                                id="password"
                                required
                                ref={passwordRef}
                            />
                            <span className="icons">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="submit-field">
                            <button className="submit" type="submit">
                                Iniciar Sesión
                            </button>
                            {isLoading && <p>Cargando...</p>}
                            {isError && <p>Error al cargar los datos.</p>}
                            <p>¿No tienes una cuenta? <span className="register" onClick={handleSignUp}>Regístrate</span></p>
                            <p>¿Olvidaste tu contraseña? <span className="register" onClick={handlePassword}>Recuperar contraseña</span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;