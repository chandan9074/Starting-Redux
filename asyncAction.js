// import pakages 

const redux = require('redux')
const createStore = redux.createStore


// Create initial state

const initialState = {
    loading: false, 
    users: [], 
    error: ""
}

// Action types

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'; 
const FETCH_USERS_SUCCESS = 'FETCH_USERS_REQUEST';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Actions 

const fetchUserRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = users =>{
    return{
        type: FETCH_USERS_SUCCESS, 
        payload: users
    }
}
const fetchUserFailure = error =>{
    return{
        type: FETCH_USERS_FAILURE, 
        payload: error
    }
}

// Create Reducer

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                users: action.payload, 
                error: '' 
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state, 
                loading: false, 
                users: [], 
                error: action.payload
            }
    }
}

// Create store

const store = createStore(reducer)