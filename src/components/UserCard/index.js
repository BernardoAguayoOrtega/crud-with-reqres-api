//import react and its hooks
import React, { useContext } from 'react';
//import the styles
import { useStyles } from './styles';
//import material ui components
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
//import context
import { Context } from '../../utils/context';

export const UserCard = () => {
	//use the classes
	const classes = useStyles();
	//use the context
	const { email, firstName, lastName, avatar } = useContext(Context);

	return (
		<Card aria-label='user card' className={classes.root}>
			<div className={classes.details}>
				<CardContent aria-label='card content' className={classes.content}>
					<Typography aria-label='user name' component='h5' variant='h5'>
						{`${firstName} ${lastName}`}
					</Typography>
					<Typography aria-label='user info' variant='subtitle1'>
						{email}
					</Typography>
				</CardContent>
			</div>
			<CardMedia
				aria-label='card image'
				className={classes.cover}
				image={avatar}
				title={`image of ${firstName} ${lastName}`}
			/>
		</Card>
	);
};
