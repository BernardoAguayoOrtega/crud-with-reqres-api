//import make styles tool
import { makeStyles } from '@material-ui/core/styles';

//create and export styles
export const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		flexDirection: 'column',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		background: 'rgba(255,255,255,.8)',
	},
	title: {
		padding: '1rem',
	},
	button: {
		margin: '1rem',
	},
}));
