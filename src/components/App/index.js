//import react
import React from 'react';
//import header component
import { Header } from '../Header';
//import user card component
import { ListOfUsers } from '../../pages/ListOfUsers';

//create and export app component
export const App = () => {
	return (
		<>
			<Header />
			<ListOfUsers />
		</>
	);
};
