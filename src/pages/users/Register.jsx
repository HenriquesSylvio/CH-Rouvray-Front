import React from 'react';

const Register = (props) => {
    return (
            <div className="tab-content mt-3">
                <form className="form-profile">
                    <fieldset>
                        <legend>Création de votre compte</legend>
                        <div>
                            <label>Prénom :
                                <input
                                    type="text"
                                    name="first_name"
                                    className="form-control"
                                    id="first_name"
                                />
                            </label>
                            <label>Nom :
                                <input
                                    type="text"
                                    name="last_name"
                                    className="form-control"
                                    id="last_name"
                                />
                            </label>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="email"
                                // placeholder="mail@mail.fr"
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                // placeholder="Mot de passe"
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

export  default Register;
