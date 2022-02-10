import axios from 'axios';
import jwtDecode from "jwt-decode";
import {addItem, getItem} from "./LocaleStorage";

const URLApi = 'http://127.0.0.1:8000/api/'

export function AddPost(credentials) {
    const config = {
        headers: { Authorization: `Bearer ${getItem('Token')}` }
    };

    console.log(config);
    return axios
        .post(URLApi + "posts", credentials, config);
    // eturn axios
    //     .post(URLApi + "posts", credentials, config).then(console.log).catch(console.log)
}