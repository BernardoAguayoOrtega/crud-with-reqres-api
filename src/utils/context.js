//import react
import React from 'react';

//create the context and export it
export const Context = React.createContext();

//crete a context provider and export it
export const ContextProvider = ({ children }) => {
	return <Context.Provider>{children}</Context.Provider>;
};
