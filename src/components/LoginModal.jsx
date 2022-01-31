import React, {useContext, useEffect, useState} from "react"
import Auth from "../contexts/Auth";
import {login} from "../services/AuthApi";
import {toast} from "react-toastify";

export default function LoginModal({history, closeModal}) {
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
            // history.replace('/account')
            closeModal(false)
        }
    }, [history, isAuthenticated]);

    return(
        // <div className="modalBackground">
        //     <div className="modalContainer">
        //         <h1>
        //             terrdtdtdtdrtdt
        //         </h1>
        //     </div>
        // </div>
    <div className="modalBackground">
        <div className="modalContainer">
            <form className="form-profile" onSubmit={handleSubmit}>
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
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
                    <div className="form-group my-2">
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
                    <button type="submit" className="btn btn-outline-primary">
                        Se connecter
                    </button>
                </fieldset>
            </form>
        </div>
    </div>
    )
}
