//import react
import React, { useContext } from 'react';
//import pagination
import Pagination from '@material-ui/lab/Pagination';
//import styles
import { useStyles } from './styles';
//import context
import { Context } from '../../utils/context';

export const PaginationComponent = () => {
	//use the styles
	const classes = useStyles();
	//use the context
	const { currentlyPage, setCurrentlyPage } = useContext(Context);

	return (
		<div className={classes.root}>
			<Pagination
				size='large'
				onChange={(event, page) => setCurrentlyPage(page)}
				page={currentlyPage}
				count={2}
				color='primary'
			/>
		</div>
	);
};
