//import make styles
import { makeStyles } from '@material-ui/core/styles';

//export the styles
export const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
}));
