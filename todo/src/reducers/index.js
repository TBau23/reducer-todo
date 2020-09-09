export const initialState = [
    {
        item: 'Learn Redux',
        completed: false,
        id: Math.random()
    },
    {
        item: 'Workout',
        completed: false,
        id: Math.random()
    }

]
// reducers are functions that take in two objects, state and action
// and they reduce them down to a single object, which is the new state

// EVENT: CLICK ON TASK to toggle completed
// {type: "TOGGLE_COMPLETED"}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Math.random()
            }
            return [...state, newTodo]
        case "TOGGLE_COMPLETED":
            return state.map(item => (item.id === action.payload ?
                 {...item, completed: !item.completed} : item))
        case "CLEAR_COMPLETED": 
            return state.filter(item => item.completed === false)
                
    }
}

