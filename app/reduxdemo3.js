var redux = require('redux');

var reducer=(state={name: 'unknown'}, action) =>{
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name: action.name
            };
        default:
            return state;
    }
};


var store = redux.createStore(reducer);

var us = store.subscribe(()=>{
    var state = store.getState();
    console.log('Name is ',state.name);
})
var currentState = store.getState();
console.log('my state is ',currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'SRIKANTH'
})

//console.log('Name should be srikanth ',store.getState());
//us();
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'SUSMITHA'
})
//unsubscribe
us();
//console.log('Name should be susmitha ',store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'PRASHANTH'
})

//console.log('Name should be PRASHANTH ',store.getState());