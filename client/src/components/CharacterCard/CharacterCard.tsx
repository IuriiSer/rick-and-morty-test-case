import React, { memo } from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Character } from '../../lib/models/Character';

const Item = styled(Card)(({ theme }) => ({
	...theme.typography.body2,
}));

interface CharacterCardIntrface {
	data: Character;
}

const CharacterCard: React.FC<CharacterCardIntrface> = ({ data }: CharacterCardIntrface) => {
	const { name, status, species, gender, origin, location, image } = data;

	return (
		<Item>
			<CardMedia component='img' alt={name} height='auto' image={image} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{`${name} - ${species} ${gender} have status ${status}. Origin planet is ${origin.name}. Last seen ${location.name}`}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Item>
	);
};

export default memo(CharacterCard);
