var redux = require('redux');

var nextHobbyId = 1;
var nextMovieId = 1;
var defaultState = {
    name: 'unknown',
    hobbies: [],
    movies: []
}

var nameReducer = (state='unknown', action) =>{
    switch(action.type){
        case 'CHANGE_NAME':
            return action.name
        default:
            return state;
    }
};

var hobbiesReducer = (state=[], action) =>{
    switch(action.type){
        case 'ADD_HOBBY':
            return [
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                    ]
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }
};

var moviesReducer = (state=[], action) =>{
    switch(action.type){
        case 'ADD_MOVIE':
            return [
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                    ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
})

var store = redux.createStore(reducer)

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

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 1
})

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
})