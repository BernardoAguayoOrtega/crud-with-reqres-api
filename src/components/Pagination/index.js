//import react
import React from 'react';
//import pagination
import Pagination from '@material-ui/lab/Pagination';
//import styles
import { useStyles } from './styles';

export const PaginationComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Pagination page={1} count={10} color='primary' />
		</div>
	);
};
