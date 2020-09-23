//import axios
import axios from 'axios';

//create the instance
export const instance = axios.create({
	baseURL: 'https://reqres.in/api',
});

//create end points
export const getUsers = (page) => `/users?page=${page}`;
//check user
export const deleteUser = (userId) => `/users/${userId}`;
//get posts
export const updateUser = (userId) => `/users/${userId}`;
//post a new pose
export const createUser = '/users';
