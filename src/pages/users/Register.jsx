import React, {useEffect, useState} from 'react';
import useFormRegister from '../../services/useFormRegister';
import validate from '../../services/ValidateInfoRegister';
import Login from '../..//pages/users/Login'
import { useHistory } from 'react-router-dom'
import {register} from "../../services/RegisterApi";
import {toast} from "react-toastify";

const Register = ({history}) => {

    // const { handleChange, handleSubmit, values, errors } = useFormRegister(
    //     //submitForme,
    //     true,
    //     validate
    // );

    // const [isSubmitted, setIsSubmitted] = useState(false)
    // function submitForm(){
    //     // if (!isSubmitted)
    //     // {
    //          setIsSubmitted(true);
    //     // }else {
    //     //
    //     // }
    //     //<Register submitForme={true}/>
    //     //submitForme = true
    // }

    // function faireRedirection() {
    //     //if (errors. == 0){
    //     //     history.replace('/account')
    //     //}
    // }

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(async () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log(values);
                try {

                const response = await register(values);
                history.replace('/login')
                toast.success('Création du compte réussi ! 😄')
                } catch ({response}) {
                    toast.error(response.data.violations[0].message + " ! 😃")
                        //"Un problème est survenu lors de la création de votre compte, veuillez réessayer ! 😃"
                        console.log(response.data.violations[0].message)
                }
            }
        },
        [errors]
    );

    // const handleSubmit = async event => {
    //     event.preventDefault();
    //
    //     try {
    //         const response = await register(user);
    //         setIsAuthenticated(response);
    //         history.replace('/account')
    //         toast.success('Création du compte réussi ! 😄')
    //     } catch ({response}) {
    //         toast.error(response)
    //         //"Un problème est survenu lors de la création de votre compte, veuillez réessayer ! 😃"
    //         //console.log(response)
    //     }
    // }

    return (
            <div className="tab-content form-inputs">
                <form className="form-profile" onSubmit={handleSubmit} noValidate>
                        <fieldset>
                            <legend>Création de votre compte</legend>
                            <div className="form-group my-2">
                                <label>Prénom :</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    id="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <p>{errors.firstName}</p>}

                                <label>Nom :</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    id="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <p>{errors.lastName}</p>}
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="email">Email :</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    // placeholder="mail@mail.fr"
                                />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="password">Mot de passe :</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    // placeholder="Mot de passe"
                                />
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                            <div className="form-group my-2">
                                <label>Confirmation du mot de passe :</label>
                                <input
                                    type="password"
                                    name="password2"
                                    className="form-control"
                                    id="password2"
                                    value={values.password2}
                                    onChange={handleChange}
                                    // placeholder="Mot de passe"
                                />
                                {errors.password2 && <p>{errors.password2}</p>}
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                S'enregistrer
                            </button>
                        </fieldset>
                </form>
                {/*{!isSubmitted ? (*/}
                {/*    <Register submitForm={submitForm} />*/}
                {/*) : (*/}
                {/*    <div>*/}
                {/*        <p>test</p>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
    );
};

export  default Register;
