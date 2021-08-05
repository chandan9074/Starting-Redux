// import pakages 

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// create action types here
const buy_cake = "buy_cake";
const buy_iceCream = "buy_iceCream";

// create action functions here
function buyCake(){
    return{
        type: buy_cake,
    }
}
function buyIcecream(){
    return{
        type: buy_iceCream,
    }
}

// create combine initial state

// const initialState = {
//     numOfCakes: 10,
//     numofIcecream: 20
// }

// create multiple cases in one reducers

// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case buy_cake: return{
//             ...state, 
//             numOfCakes: state.numOfCakes-1
//         }
//         case buy_iceCream: return{
//             ...state, 
//             numofIcecream: state.numofIcecream-1
//         }
//         default: return state
//     }
// }

// create indivudule initial state
const initialCakeState = {
    numOfCakes: 10 
}

const initialIceCreamState = {
    numofIcecream: 20
}

// create individual reducers functions
const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case buy_cake: return{
            ...state, 
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) =>{
    switch(action.type){
        case buy_iceCream: return{
            ...state, 
            numofIcecream: state.numofIcecream-1
        }
        default: return state
    }
}

// combine all individule reducers by combineReducers 
const root_reducers = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})

// create store
const store = createStore(root_reducers)
console.log("initial state", store.getState())

// subscribe the state
const unsubscribe =  store.subscribe(()=>console.log("update state", store.getState()))

// dispatch actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// unsubscribe the state
unsubscribe()

