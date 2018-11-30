var redux = require('redux');

var nextHobbyId = 1;
var nextMovieId = 1;
var defaultState = {
    name: 'unknown',
    hobbies: [],
    movies: []
}
var reducer=(state=defaultState, action) =>{
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                hobbies: [
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'REMOVE_MOVIE':
            return {
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                movies: [
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        default:
            return state;
    }
};


var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));

store.subscribe(()=>{
    var state = store.getState();
    console.log('Name is ',state.name);

    console.log('New State is ',store.getState());
})
//var currentState = store.getState();
console.log('state is ',store.getState());


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
//us();
//console.log('Name should be susmitha ',store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'PRASHANTH'
})

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Music'
})

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Swimming'
})

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Playing'
})

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'ROBO 2.O',
    genre: 'Fiction'
})

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'MS DHONI',
    genre: 'BIO PIC'
})

/* store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 1
})

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
}) */

//console.log('Name should be PRASHANTH ',store.getState());