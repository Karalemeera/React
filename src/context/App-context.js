// AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
    data: [],
};

// Action types
const ADD_DATA = 'ADD_DATA';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to add data to the state
    const addData = (newData) => {
        dispatch({ type: ADD_DATA, payload: newData });
    };

    return (
        <AppContext.Provider value={{ state, addData }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
export const useAppContext = () => {
    return useContext(AppContext);
};
