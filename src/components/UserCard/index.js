//import react and its hooks
import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export const UserCard = () => {
	const classes = useStyles();

	return (
		<Card aria-label='user card' className={classes.root}>
			<div className={classes.details}>
				<CardContent aria-label='card content' className={classes.content}>
					<Typography aria-label='user name' component='h5' variant='h5'>
						Live From Space
					</Typography>
					<Typography aria-label='user info' variant='subtitle1'>
						Mac Miller
					</Typography>
				</CardContent>
			</div>
			<CardMedia
				aria-label='card image'
				className={classes.cover}
				image='/static/images/cards/live-from-space.jpg'
				title='Live from space album cover'
			/>
		</Card>
	);
};
