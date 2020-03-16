import React, { useState, useReducer } from 'react';
import { initialState, toDoReducer} from '../reducers/toDoReducer';

export const toDo = () =>{
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    
}