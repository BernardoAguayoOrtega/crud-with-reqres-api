//import react and its hooks
import React, { useState, useEffect } from 'react';

//create the context and export it
export const Context = React.createContext();

//crete a context provider and export it
export const ContextProvider = ({ children }) => {
	//use state for user data
	const [email, setEmail] = useState('george.bluth@reqres.in');
	const [firstName, setFirstName] = useState('George');
	const [lastName, setLastName] = useState('Bluth');
	const [avatar, setAvatar] = useState(
		'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
	);
	const [id, setId] = useState('1');

	return (
		<Context.Provider
			value={{
				email,
				setEmail,
				firstName,
				setFirstName,
				lastName,
				setLastName,
				avatar,
				setAvatar,
				id,
				setId,
			}}>
			{children}
		</Context.Provider>
	);
};
