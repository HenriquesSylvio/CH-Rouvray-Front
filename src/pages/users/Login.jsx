import React from 'react';

const Login = (props) => {
    return (
        <div className="tab-content  mt-3">
            <form className="form-profile">
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
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Se connecter
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export  default Login;
