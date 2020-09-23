//import react and its hooks
import React, { useState } from 'react';
//import components
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
//import use styles
import { useStyles } from './styles';

//create and export Header component
export const Header = () => {
	//use styles
	const classes = useStyles();
	//use state hook
	const [anchorEl, setAnchorEl] = useState(null);

	//handler the click of the menu button
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	//handle the close of the menu button
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{/*App bar component from material ui*/}
			<div className={classes.root}>
				{/*App bar component*/}
				<AppBar aria-label='nav bar' position='static'>
					{/*tool bar component from material ui*/}
					<Toolbar aria-label='tool bar'>
						<IconButton
							onClick={handleClick}
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu button'>
							<MenuIcon />
						</IconButton>
						<Menu
							aria-label='menu'
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem aria-label='menu item' onClick={handleClose}>
								Profile
							</MenuItem>
							<MenuItem aria-label='menu item' onClick={handleClose}>
								My account
							</MenuItem>
							<MenuItem aria-label='menu item' onClick={handleClose}>
								Logout
							</MenuItem>
						</Menu>
						<Typography
							align='center'
							aria-label='title'
							variant='h6'
							className={classes.title}>
							User Crud
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
};
