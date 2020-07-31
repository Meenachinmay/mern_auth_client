import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = (formProps) => dispatch => {
    axios.post('/signup', formProps)
        .then(response => {
            dispatch({
                type: AUTH_USER,
                payload: response.data.success
            })
        })
        .catch(error => dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error
        }));
}

// dispatch method basically takes an action.type and action.payload and then dispatch this information to the reducers where reducer can update the state based upon the action.type
// we can call the dispatch method from anywhere like we can call if from components and from actions as well.