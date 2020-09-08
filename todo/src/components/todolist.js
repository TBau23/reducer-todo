import React, { useState } from 'react';

import { initialState, todoReducer } from '../reducers/index'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("")

    return (
        <div>
            {initialState.map(task => (
                <div>
                    <h3>{task.item}</h3>
                </div>
            ))}
        </div>
    )

}

export default TodoList;