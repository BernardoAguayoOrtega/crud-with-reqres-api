//import react and its hooks
import React, { useContext } from 'react';
//import grid component from materia ui
import { Grid } from '@material-ui/core';
//use the context
import { Context } from '../../utils/context';
//import user card component
import { UserCard } from '../../components/UserCard';
//import pagination
import { PaginationComponent } from '../../components/Pagination';
//import styles
import './styles.css';

//create page list of users and export it
export const ListOfUsers = () => {
	const { users } = useContext(Context);

	return (
		<div className='list-of-posts'>
			<Grid className='list-of-posts__grid' container spacing={2}>
				{/*use the grid item*/}
				<Grid item xs={12}>
					<Grid container justify='center' spacing={0}>
						{users.map((user, i) => (
							<UserCard
								key={i}
								email={user.email}
								firstName={user.first_name}
								lastName={user.last_name}
								id={user.id}
								avatar={user.avatar}
							/>
						))}
					</Grid>
				</Grid>
			</Grid>
			<PaginationComponent />
		</div>
	);
};
