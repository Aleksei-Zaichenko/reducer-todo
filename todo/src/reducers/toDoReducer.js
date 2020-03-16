export const initialState ={
    arrayOfTodos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987541
        },
        {
            item: 'Learn about how to swim',
            completed: false,
            id: 389298751
        },
        {
            item: 'Learn about how to run',
            completed: false,
            id: 3892987512
        }
    ]   
};

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':   
            const newToDotask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            
            const arrayOfTodos = [...state.arrayOfTodos, newToDotask];

            return {
                arrayOfTodos
            };
        default:
            return state;
    }
};