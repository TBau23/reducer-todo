import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/index'

// dispatch takes in an action object, and calls in the reducer function
// with state and that action

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState) // two args = reducer, initialState
    // const [Todo, setTodos] = useState("")
    const [newTodoText, setNewTodoText] = useState('')

    const handleChanges = e => {
        setNewTodoText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO',
        payload: newTodoText})

    }

    return (
        <div>
        
            <input
            type = 'text'
            name = 'newTodoText'
            placeholder='Add a Todo'
            onChange={handleChanges}
            />
            <button onClick={handleSubmit}>Add ToDo</button>
            <button>Clear Completed Tasks</button>
            {state.todos.map(task => (
                <div>
                    <h4>{task.item}</h4>
                </div>
            ))}
        </div>
    )

}

export default TodoList;