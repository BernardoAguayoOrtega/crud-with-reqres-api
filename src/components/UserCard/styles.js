//import make styles
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		background: 'gray',
		width: '20rem',
		color: 'white',
		margin: '1rem',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));
