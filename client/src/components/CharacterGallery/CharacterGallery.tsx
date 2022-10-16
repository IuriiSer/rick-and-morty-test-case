import React from 'react';
import useLocalStorage from '../../lib/hooks/useLocalStorage';

import { Container, CircularProgress, Alert, AlertTitle, Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CharacterCard from '../CharacterCard/CharacterCard';

import { Character } from '../../lib/models/Character';
import { useCharacters } from '../../lib/hooks/useCharecters';

const CharacterGallery: React.FC = () => {
	const [page, setPage] = useLocalStorage<number>('page', 1);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const { error, loading, data } = useCharacters(page);

	if (loading)
		return (
			<Container sx={{ display: 'flex', justifyContent: 'center' }}>
				<CircularProgress />
			</Container>
		);

	if (error)
		return (
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				This is an error alert — <strong>check it out!</strong>
			</Alert>
		);

	return (
		<>
			<Container sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
				<Pagination count={42} page={page} onChange={handleChange} />
			</Container>
			<Container>
				<Grid
					container
					rowSpacing={{ xs: 1, sm: 2, md: 3 }}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{data.map((character: Character) => (
						<Grid xs={4} sm={4} key={character.id}>
							<CharacterCard data={character} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default CharacterGallery;
