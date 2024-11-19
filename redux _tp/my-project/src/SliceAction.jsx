const initialState = {
    todos: [
        { id: 1, text: 'je dis aller travailler' },
        { id: 2, text: 'learn backend' },
        { id: 3, text: 'learn devops' },
    ]
};

const SliceAction = (state = initialState, action) => {
    switch (action.type) {
        case 'add_task':
            const newId = state.todos.length ? Math.max(state.todos.map(todo => todo.id)) + 1 : 1;
            return {
                ...state,
                todos: [...state.todos, { id: newId, text: action.payload }], 
            };
        case 'remove_task':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload), 
            };
        default:
            return state; 
    }
};

export default SliceAction;
