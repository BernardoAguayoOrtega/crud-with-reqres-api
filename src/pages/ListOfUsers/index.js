//import react and its hooks
import React, { useContext, useState } from 'react';
//import grid component from materia ui
import { Grid } from '@material-ui/core';
//use the context
import { Context } from '../../utils/context';
//import user card component
import { UserCard } from '../../components/UserCard';
//import pagination
import { PaginationComponent } from '../../components/Pagination';
//import spring tools
import { useSpring, animated } from 'react-spring';
//import the context
//import styles
import './styles.css';

//create page list of users and export it
export const ListOfUsers = () => {
	//use the global context
	const { users } = useContext(Context);

	// confi for animation
	const [state] = useState(true);
	const { x } = useSpring({
		from: { x: 0 },
		x: state ? 1 : 0,
		config: { duration: 1000 },
	});

	return (
		<div className='list-of-posts'>
			<Grid
				aria-label='grid container'
				className='list-of-posts__grid'
				container
				spacing={2}>
				{/*use the grid item*/}
				<Grid item xs={12}>
					<Grid
						aria-label='grid content'
						container
						justify='center'
						spacing={0}>
						{users.map((user, i) => (
							<animated.div
								key={i}
								style={{
									opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
									transform: x
										.interpolate({
											range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
											output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
										})
										.interpolate((x) => `scale(${x})`),
								}}>
								{/*show the card*/}
								<UserCard
									email={user.email}
									firstName={user.first_name}
									lastName={user.last_name}
									id={user.id}
									avatar={user.avatar}
								/>
							</animated.div>
						))}
					</Grid>
				</Grid>
			</Grid>
			<PaginationComponent />
		</div>
	);
};
