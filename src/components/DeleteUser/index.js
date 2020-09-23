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

export const DeleteUser = () => {
	//use styles
	const classes = useStyles();
	// use local state
	const [open, setOpen] = React.useState(false);
	//use global context
	const { eraseUser, id, setId } = useContext(Context);

	//handle the open
	const handleOpen = () => {
		setOpen(true);
	};
	//handle the close
	const handleClose = () => {
		setOpen(false);
	};
	//handle de delete
	const handleDelete = () => {
		if (id > 0) {
			eraseUser();
			handleClose();
			setId('');
		} else {
			window.alert('wrong number, only + numbers');
		}
	};

	return (
		<div>
			<Button aria-labelledby='button' type='button' onClick={handleOpen}>
				Delete User
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
							Enter the id of the user you want to delete
						</Typography>
						<TextField
							aria-label='user id'
							value={id}
							id='outlined-basic'
							label='user id'
							variant='outlined'
							type='number'
							onChange={(e) => setId(e.target.value)}
						/>
						<Button
							aria-label='delete button'
							className={classes.button}
							variant='contained'
							color='secondary'
							onClick={handleDelete}>
							DELETE
						</Button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
