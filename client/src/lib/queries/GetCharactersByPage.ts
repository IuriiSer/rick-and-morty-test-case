import { gql } from '@apollo/client';
import { Character } from '../models/Character';

export const GET_CHARACTERS_BY_PAGE = gql`
	query ($page: Int) {
		getCharactersByPage(page: $page) {
			id
			name
			status
			species
			gender
			origin {
				name
				url
			}
			location {
				name
				url
			}
			image
		}
	}
`;

export type GET_CHARACTERS_BY_PAGE_RESULT = {
	getCharactersByPage: Character[];
};
