import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = (formProps, callback) => dispatch => {
    axios.post('/signup', formProps)
        .then(response => {
            dispatch({
                type: AUTH_USER,
                payload: response.data.token            
            });

            // SAVING THE TOKEN TO LOCAL STORAGE
            localStorage.setItem('token', response.data.token);
            callback();
        })
        .catch(error => dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error
        }));
}

// LOGIN Action
export const signin = (formProps, callback) => dispatch => {
    axios.post('/signin', formProps)
        .then(response => {
            dispatch({
                type: AUTH_USER,
                payload: response.data.token
            });
            localStorage.setItem('token', response.data.token);
            callback();
        })
        .catch(error => dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error
        }));
}

// LOGOUT Action
export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    }
}

// dispatch method basically takes an action.type and action.payload and then dispatch this information to the reducers where reducer can update the state based upon the action.type
// we can call the dispatch method from anywhere like we can call if from components and from actions as well.