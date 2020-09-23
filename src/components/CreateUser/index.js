//import react
import React, { useContext } from 'react';
//import styles
import { useStyles } from './styles';
//import modal
import Modal from '@material-ui/core/Modal';
//import backdrop
import Backdrop from '@material-ui/core/Backdrop';
//import fade
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
//import typography
import Typography from '@material-ui/core/Typography';
//import context
import { Context } from '../../utils/context';

export const CreateUser = () => {
	//use styles
	const classes = useStyles();
	// use local state
	const [open, setOpen] = React.useState(false);
	//use global context
	const {
		email,
		setEmail,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		avatar,
		setAvatar,
		createNewUser,
	} = useContext(Context);

	//handle the open
	const handleOpen = () => {
		setOpen(true);
	};
	//handle the close
	const handleClose = () => {
		setOpen(false);
	};
	//handle de delete
	const handleSubmit = () => {
		handleClose();
		createNewUser();
	};

	return (
		<div>
			<Button aria-labelledby='button' type='button' onClick={handleOpen}>
				CreateUser
			</Button>
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
						<Typography
							aria-label='title'
							className={classes.title}
							variant='h6'
							component='p'>
							Enter the data to create the user
						</Typography>
						<TextField
							className={classes.input}
							aria-label='user first name'
							value={firstName}
							id='outlined-basic'
							label='first name'
							variant='outlined'
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<TextField
							className={classes.input}
							aria-label='user last name'
							value={lastName}
							id='outlined-basic'
							label='last name'
							variant='outlined'
							onChange={(e) => setLastName(e.target.value)}
						/>
						<TextField
							type='email'
							className={classes.input}
							aria-label='email'
							value={email}
							id='outlined-basic'
							label='email'
							variant='outlined'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							className={classes.input}
							type='file'
							aria-label='avatar'
							value={avatar}
							id='outlined-basic'
							label='avatar'
							variant='standard'
							onChange={(e) => setAvatar(e.target.value)}
						/>
						<Button
							className={classes.button}
							variant='contained'
							color='primary'
							onClick={handleSubmit}>
							Create User
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
