//import react and its hooks
import React, { useState } from 'react';
//import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import use styles
import { useStyles } from './styles';

//create and export Header component
export const Header = () => {
	//use styles
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						News
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};
