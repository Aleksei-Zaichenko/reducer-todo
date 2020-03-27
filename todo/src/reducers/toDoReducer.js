export const initialState ={
    arrayOfTodos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987541
        },
        {
            item: 'Learn how to swim',
            completed: false,
            id: 389298751
        },
        {
            item: 'Learn how to run',
            completed: false,
            id: 3892987512
        }
    ]   
};

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'MARK_TODO_AS_COMPLETED':   
            return {
                arrayOfTodos: state.arrayOfTodos.map(taskToDo => {
                    if(taskToDo.id === action.taskId){
                      return{
                        ...taskToDo,
                        completed: !taskToDo.completed
                      }
                    }
                    else{
                      return taskToDo
                    }
            })}    

        case 'CLEAR_COMPLETED':
            return {
                arrayOfTodos: state.arrayOfTodos.filter(taskTodo => taskTodo.completed === false)
            };
            
        case 'ADD_TODO':   
            const newToDotask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };

            return {
               arrayOfTodos: [...state.arrayOfTodos, newToDotask]
            };

        default:
            return state;
    }
};