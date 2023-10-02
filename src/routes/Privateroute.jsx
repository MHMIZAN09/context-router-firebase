import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/authProvider";


// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;

};

export default Privateroute;