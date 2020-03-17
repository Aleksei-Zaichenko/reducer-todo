import React, { useState, useReducer } from 'react';

import { initialState, toDoReducer} from '../reducers/toDoReducer';

const ToDo = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [newToDoTask, setNewToDoTask] = useState('');

    const handleChanges = e => {
        setNewToDoTask(e.target.value);
      };

    return(
        console.log(state),
        <div className="App">
            <div className ="displaying-container">
                {state.arrayOfTodos.map(task => (
                    <h3 
                        key={task.id}
                        onClick={ () => { dispatch({ type: 'MARK_TODO_AS_COMPLETED', taskId: task.id}) } }
                        className={`task${task.completed ? ' completed' : ''}`}
                    >
                        {task.item}
                    </h3>
                ))}
            </div>
            <div className ="input-container">
                <input
                    type="text"
                    name="newToDoTask"
                    value={newToDoTask}
                    onChange={handleChanges}
                />
                <button onClick={ ()=>{ dispatch({ type: 'ADD_TODO', payload: newToDoTask}) } }>Add to list</button>
                <button onClick={ ()=>{ dispatch({ type: 'CLEAR_COMPLETED'}) } }>Clear completed</button>
            </div>
        </div>
    );
};

export default ToDo;