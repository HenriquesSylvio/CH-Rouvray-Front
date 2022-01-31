import React, {useContext, useState} from "react"
import { NavLink } from "react-router-dom";
import Auth from "../contexts/Auth";
import {logout} from "../services/AuthApi";
import {toast} from "react-toastify";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        toast.info('A bientôt ! 😋');
    }

    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
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
                            {(isAuthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/posts">
                                    Posts
                                </NavLink>
                            </li>
                            )) || "" }
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {(!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to="/login">
                                            Se connecter
                                        </NavLink>
                                        <button className="openModalBtn"
                                        onClick={() => {
                                            setOpenModal(true);
                                        }}>
                                            Se connecter
                                        </button>
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
            <div>
                {openModal && <LoginModal closeModal={setOpenModal}/>}
            </div>
        </div>
    )
}

export default Navbar;
