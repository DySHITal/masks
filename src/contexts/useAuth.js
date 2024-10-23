import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function useAuth(type) {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context[type];
}

export default useAuth;