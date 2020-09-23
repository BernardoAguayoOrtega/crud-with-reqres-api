//import react
import React, { useContext } from 'react';
//import styles
import { useStyles } from './styles';
//import alert component
import { Alert as AlertMaterial } from '@material-ui/lab';
//import context
import { Context } from '../../utils/context';

export const Alert = () => {
	//use styles
	const classes = useStyles();
	//use context
	const { response, setResponse } = useContext(Context);

	return (
		<div className={classes.root}>
			{response > 200 && response < 300 ? (
				<AlertMaterial onClose={() => setResponse(0)}>
					Task completed!
				</AlertMaterial>
			) : (
				<></>
			)}
		</div>
	);
};
