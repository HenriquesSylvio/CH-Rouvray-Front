import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                            <NavLink className="nav-link active" to="/">Accueil
                                {/*<span className="visually-hidden">(current)</span>*/}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/posts">Posts</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/login">Login
                                {/*<span className="visually-hidden">(current)</span>*/}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/register">Posts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                 data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
        //                 aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //     </div>
        // </nav>


)
}

export default Navbar;
