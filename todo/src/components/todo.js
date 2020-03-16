import React, { useState, useReducer } from 'react';

import { initialState, toDoReducer} from '../reducers/toDoReducer';

const ToDo = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [newToDoTask, setNewToDoTask] = useState('');

    return(
        <div className="App">
            <h3>
                {state.item}
            </h3>
        </div>
    );
};

export default ToDo;