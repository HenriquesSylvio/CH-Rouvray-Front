import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import validate from "../services/ValidateInfoComment";
import {register} from "../services/RegisterApi";
import {toast} from "react-toastify";
import {AddComment} from "../services/AddCommentApi";
import { useHistory, useLocation } from 'react-router-dom'

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


export default function AddCommentButton(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const queryParams = new URLSearchParams(window.location.search);
    const history = useHistory()
    const idPost = props.idPost
    const [values, setValues] = useState({
        content: '',
        belongTo: '/api/posts/' + idPost
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
                    const response = await AddComment(values);
                    //console.log('/post/' + response.data.id);
                    // history.replace('/post/' + response.data.id)
                    //history.replace('/post/' & response.data.id)
                    toast.success('Cr??ation du commentaire r??ussi ! ????')
                 } catch ({response}) {
                    //toast.error(response.data.violations[0].message + " ! ????")
                    //"Un probl??me est survenu lors de la cr??ation de votre compte, veuillez r??essayer ! ????"
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
                Cr??er un commentaire
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
                            {/*<input*/}
                            {/*    style={{display: 'none'}}*/}
                            {/*    type="text"*/}
                            {/*    name="belongTo"*/}
                            {/*    className="form-control"*/}
                            {/*    id="belongTo"*/}
                            {/*    value="/api/posts/12"*/}
                            {/*/>*/}
                            <label htmlFor="content">Contenu :</label>
                            <textarea
                                rows="25"
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
                                Cr??er le commentaire
                            </button>
                        </div>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}