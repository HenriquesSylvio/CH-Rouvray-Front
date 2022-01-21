import React, {useContext} from "react"
import { NavLink } from "react-router-dom";
import Auth from "../contexts/Auth";

const Navbar = () => {
    const {isAuthenticated} = useContext(Auth);

    const handleLogout = () => {
        console.log('deco')
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">CH du Rouvray</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">
                                Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/posts">
                                Posts
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {(!isAuthenticated && (
                            <>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/login">
                                    Se connecter
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/register">
                                    S'enregistrer
                                </NavLink>
                            </li>
                            </>
                        )) || (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/account">
                                        Mon compte
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        Deconnexion
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default Navbar;
