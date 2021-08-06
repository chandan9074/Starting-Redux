// import pakages 

const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


// Create initial state

const initialState = {
    loading: false, 
    users: [], 
    error: ""
}

// Action types

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'; 
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
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
                // ...state, 
                loading: false, 
                users: action.payload, 
                error: '' 
            }
        case FETCH_USERS_FAILURE:
            return {
                // ...state, 
                loading: false, 
                users: [], 
                error: action.payload
            }
    }
}

// Create action creater 

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/user').then(response =>{
            // get data by response.data
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            // error messages
            dispatch(fetchUserFailure(error.message))
        })
    }
}

// Create store

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> { console.log(store.getState())})
store.dispatch(fetchUsers())