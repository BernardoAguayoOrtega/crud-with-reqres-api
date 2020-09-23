//import react and its hooks
import React, { useState, useEffect } from 'react';

//create the context and export it
export const Context = React.createContext();

//crete a context provider and export it
export const ContextProvider = ({ children }) => {
	//use state for user data
	const [email, setEmail] = useState(undefined);
	const [firstName, setFirstName] = useState(undefined);
	const [lastName, setLastName] = useState(undefined);
	const [avata, setAvatar] = useState(undefined);
	const [id, setId] = useState(undefined);

	return <Context.Provider>{children}</Context.Provider>;
};
