import axios from 'axios';
import jwtDecode from "jwt-decode";
import {addItem} from "./LocaleStorage";

const URLApi = 'http://127.0.0.1:8000/api/'

export function register(credentials) {
    return axios
        .post(URLApi + "users", credentials);
}