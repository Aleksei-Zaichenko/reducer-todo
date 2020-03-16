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
            {state.arrayOfTodos.map(task => (
                <h3 key={task.id}>{task.item}</h3>
            ))}
            <div>
                <input
                    type="text"
                    name="newToDoTask"
                    value={newToDoTask}
                    onChange={handleChanges}
                />
                <button onClick={ ()=>{ dispatch({ type: 'ADD_TODO', payload: newToDoTask}) } }>Add to list</button>
            </div>
        </div>
    );
};

export default ToDo;