var redux = require('redux');

var reducer=(state={name: 'unknown'}, action) =>{

    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('my state',currentState);