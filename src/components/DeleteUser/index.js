//import react
import React from 'react';
//import styles
import { useStyles } from './styles';
//import modal
import Modal from '@material-ui/core/Modal';
//import backdrop
import Backdrop from '@material-ui/core/Backdrop';
//import fade
import Fade from '@material-ui/core/Fade';
import { Button, MenuItem, TextField } from '@material-ui/core';
//import typography
import Typography from '@material-ui/core/Typography';

export const DeleteUser = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<MenuItem type='button' onClick={handleOpen}>
				Delete User
			</MenuItem>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<Typography className={classes.title} variant='h6' component='p'>
							Enter the id of the user you want to delete
						</Typography>
						<TextField
							id='outlined-basic'
							label='Outlined'
							variant='outlined'
						/>
						<Button
							className={classes.button}
							variant='contained'
							color='secondary'>
							DELETE
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
