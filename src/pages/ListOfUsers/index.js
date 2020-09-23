//import react
import React from 'react';
//import grid component from materia ui
import { Grid } from '@material-ui/core';

//create page list of users and export it
export const ListOfUsers = () => {
	return (
		<>
			<Grid container spacing={2}>
				{/*use the grid item*/}
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}></Grid>
				</Grid>
			</Grid>
		</>
	);
};
