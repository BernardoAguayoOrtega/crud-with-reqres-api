//import react and its hooks
import React from 'react';
//import the styles
import { useStyles } from './styles';
//import material ui components
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export const UserCard = ({ firstName, lastName, email, id, avatar }) => {
	//use the classes
	const classes = useStyles();

	return (
		<Card aria-label='user card' className={classes.root}>
			<div className={classes.details}>
				<CardContent aria-label='card content' className={classes.content}>
					<Typography aria-label='user name' component='h5' variant='h5'>
						{`${firstName} ${lastName}`}
					</Typography>
					<Typography aria-label='user info' variant='subtitle1'>
						{`${email} id:${id}`}
					</Typography>
				</CardContent>
			</div>
			<img
				aria-label='card image'
				src={avatar}
				title={`image of ${firstName} ${lastName}`}
			/>
		</Card>
	);
};
