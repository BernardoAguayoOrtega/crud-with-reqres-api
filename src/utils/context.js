//import react and its hooks
import React, { useState, useEffect } from 'react';
//import instance
import {
	instance,
	getUsers,
	deleteUser,
	createUser,
	updateUser,
} from './request';

//create the context and export it
export const Context = React.createContext();

//crete a context provider and export it
export const ContextProvider = ({ children }) => {
	//use state for user data
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [id, setId] = useState(0);
	//use state for the whole users
	const [users, setUsers] = useState([]);
	const [currentlyPage, setCurrentlyPage] = useState(1);
	//save the response
	const [response, setResponse] = useState(undefined);

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

	//delete user function
	const eraseUser = () => {
		instance
			.delete(deleteUser(id))
			.then((response) => setResponse(response.status))
			.catch((error) => setResponse(error.status));
	};

	//create New User user function
	const createNewUser = () => {
		instance
			.post(createUser, {
				firstName: firstName,
				lastName: lastName,
				email: email,
				avatar: avatar,
			})
			.then((response) => setResponse(response.status))
			.catch((error) => setResponse(error.status));
	};

	//update user function
	const update = () => {
		instance
			.put(updateUser(id), {
				firstName: firstName,
				lastName: lastName,
				email: email,
				avatar: avatar,
			})
			.then((response) => setResponse(response.status))
			.catch((error) => setResponse(error.status));
	};

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
				currentlyPage,
				setCurrentlyPage,
				eraseUser,
				response,
				setResponse,
				createNewUser,
				update,
			}}>
			{children}
		</Context.Provider>
	);
};
