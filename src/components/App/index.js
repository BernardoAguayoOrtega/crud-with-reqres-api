//import react
import React from 'react';
//import header component
import { Header } from '../Header';
//import instance
import { instance, getUsers } from '../../utils/request';
//import pagination
import { PaginationComponent } from '../Pagination';

//create and export app component
export const App = () => {
	instance.get(getUsers(1)).then((response) => console.log(response.data));

	return (
		<>
			<Header />
			<PaginationComponent />
		</>
	);
};
