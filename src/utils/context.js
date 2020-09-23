//import react and its hooks
import React, { useState, useEffect } from 'react';
//import instance
import { instance, getUsers } from './request';

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
	//use state for the whole users
	const [users, setUsers] = useState([]);
	const [currentlyPage, setCurrentlyPage] = useState(1);

	//use the effect to bring the users
	/**
	 * make the request, and handle the response
	 */
	useEffect(() => {
		instance
			.get(getUsers(currentlyPage))
			.then((response) => setUsers(response.data.data))
			.catch((error) =>
				window.alert(
					`ups looks like you have a server problem, call to support error: ${error}`,
				),
			);
	}, [currentlyPage]);

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
				users,
			}}>
			{children}
		</Context.Provider>
	);
};
