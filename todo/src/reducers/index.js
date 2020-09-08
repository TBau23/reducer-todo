export const initialState = [{
    item: 'Learn Redux',
    completed: false,
    id: new Date()
},
{
    item: 'Review Reducers',
    completed: false,
    id: new Date()
}]

export const todoReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TODO":
            return {...state, item: ''}
        default:
            return state
    }
}