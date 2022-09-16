// import { type } from "@testing-library/user-event/dist/type";

// const initialState = [{
//     id: 1,
//     todo: 'Hacer los challenges',
//     done: false
// }]; 

// const todoReducer = ( state = initialState, action = {} ) => {

//     if ( action.type === '[TODO] add todo'){
//         return [...state, action.payload]
//     }

//     return state
// }

// let todos = todoReducer();

// const newTodo = {
//     id: 2,
//     todo: 'Avances del proyecto',
//     done: false
// }

// const addTodoAction = {
//     type: '[TODO] add todo',
//     payload: newTodo
// }

// todos = todoReducer(todos, addTodoAction)

// console.log(todos); 

export const TodoReducer = (initialState, action) => {
    switch (action.type){
        case '[TODO] ADD TODO':
            return [...initialState, action.payload]
            break;
        default:
            return initialState;
    }
}