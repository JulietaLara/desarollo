import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { TodoReducer } from "./introReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [{
    id: new Date().getTime,
    description: 'Hacer los challenges',
    done: false
}]

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatch( action )
    }

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <TodoList todos={todos} />
            </div>
            <div className="col-5">
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>

           
        </>
    )
}