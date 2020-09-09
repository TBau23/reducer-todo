import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/index'
import './Todolist.css';

// dispatch takes in an action object, and calls in the reducer function
// with state and that action

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState) // two args = reducer, initialState
    const [newTodoText, setNewTodoText] = useState('')

    const handleChanges = e => {
        e.preventDefault()
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
            <button onClick={() => dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed Tasks</button>
            {state.map(task => (
                <h4 className= {task.completed ? 'completed item' : 'item'}
                onClick={() => dispatch({type: "TOGGLE_COMPLETED", payload: task.id})}
                >{task.item}</h4>
            ))}
        </div>
    )

}

export default TodoList;