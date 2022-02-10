import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import validate from "../services/ValidateInfoPost";
import {register} from "../services/RegisterApi";
import {toast} from "react-toastify";
import {AddPost} from "../services/AddPostApi";
import { useHistory } from 'react-router-dom'

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


export default function AddPostButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory()
    const [values, setValues] = useState({
        name: '',
        content: ''
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
                try {
                    const response = await AddPost(values);
                    //console.log('/post/' + response.data.id);
                    history.replace('/post/' + response.data.id)
                    //history.replace('/post/' & response.data.id)
                    toast.success('Création du compte réussi ! 😄')
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
                <AddIcon sx={{ mr: 1 }} />
                Créer un post
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
                            <label htmlFor="name">Titre :</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                // placeholder="mail@mail.fr"
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="content">Contenu :</label>
                            <textarea
                                rows="22"
                                //type="multiliner"
                                name="content"
                                className="form-control"
                                id="content"
                                value={values.content}
                                onChange={handleChange}
                                // placeholder="mail@mail.fr"
                            />
                            {errors.content && <p>{errors.content}</p>}
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-primary">
                                Créer le post
                            </button>
                        </div>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}