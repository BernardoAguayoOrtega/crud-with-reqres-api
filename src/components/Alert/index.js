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
			{/*good alert*/}
			{response >= 200 && response < 300 ? (
				<AlertMaterial onClose={() => setResponse(0)}>
					Task completed!
				</AlertMaterial>
			) : (
				<></>
			)}
			{/*bad alert*/}
			{response >= 400 ? (
				<AlertMaterial severity='error' onClose={() => setResponse(0)}>
					Error, the server file!
				</AlertMaterial>
			) : (
				<></>
			)}
		</div>
	);
};
