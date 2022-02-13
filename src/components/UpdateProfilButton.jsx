import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import validate from "../services/ValidateInfoRegister";
import {register} from "../services/RegisterApi";
import {toast} from "react-toastify";
import {AddPost} from "../services/AddPostApi";
import { useHistory } from 'react-router-dom'
import {addItem, getItem} from "../services/LocaleStorage";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const floatingMenuButtonStyle = {
    backgroundColor: '#DEEAF6',
    // color: '#8A3473',
    alignSelf: 'flex-end',
    position: 'fixed',
    bottom: '5%',
    right: '5%'
};


export default function UpdateProfilButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory()
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
                //console.log(values);
                console.log(getItem('Id'))
                try {
                    const response = await AddPost(values);
                    //console.log('/post/' + response.data.id);
                    history.replace('/post/' + response.data.id)
                    //history.replace('/post/' & response.data.id)
                    toast.success('Création du post réussi ! 😄')
                } catch ({response}) {
                    //toast.error(response.data.violations[0].message + " ! 😃")
                    //"Un problème est survenu lors de la création de votre compte, veuillez réessayer ! 😃"
                    //console.log('/post/' + response.data["id"]);
                }
            }
        },
        [errors]
    );



    return (
        <div>
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Fab style={floatingMenuButtonStyle} onClick={handleOpen} variant="extended">
                Modifier mon profil
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="form-profile" onSubmit={handleSubmit} noValidate>
                    <Box sx={style}>
                        <div className="form-group my-2">
                            <label htmlFor="firstName">Prenom :</label><input
                            type="text"
                            name="firstName"
                            className="form-control"
                            id="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            // placeholder="mail@mail.fr"
                        />
                            {errors.firstName && <p>{errors.firstName}</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="lastName">Nom :</label><input
                            type="text"
                            name="lastName"
                            className="form-control"
                            id="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            // placeholder="mail@mail.fr"
                        />
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="email">Email :</label><input
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
                            <label htmlFor="password">Mot de passe :</label><input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            // placeholder="mail@mail.fr"
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
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-primary">
                                Mettre à jour le profil
                            </button>
                        </div>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}