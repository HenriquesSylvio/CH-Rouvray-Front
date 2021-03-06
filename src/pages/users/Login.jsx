import React, {useContext, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import Auth from "../../contexts/Auth";
import {login} from "../../services/AuthApi";
// import login from "../../services/AuthApi";

const Login = ({history}) => {
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const[user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;

        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await login(user);
            setIsAuthenticated(response);
            history.replace('/account')
            toast.success('Bienvenue ! 😄')
        } catch ({response}) {
            toast.error("L'e-mail ou le mot de passe est incorrect. Veuillez réessayer ! 😃")
            console.log(response)
        }
    }

    useEffect(() => {
        if(isAuthenticated)
        {
            history.replace('/account')
        }
    }, [history, isAuthenticated]);

    return (
        <div className="component-wrapper">
            <div className="title-page mb-5">
                <h1 className="text-center text-white">Connection</h1>
            </div>
            <form className="" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Se connecter</legend>
                    <div className="form-group my-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="email"
                            placeholder="mail@mail.fr"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group my-2  mb-4">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Mot de passe"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-outline-primary">
                            Se connecter
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export  default Login;
