import axios from 'axios';
import {
    LOGIN_USER,
} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('http://43.206.226.112:8080/signin', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}