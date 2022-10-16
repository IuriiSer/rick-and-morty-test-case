import { useQuery } from '@apollo/client';
import {
	GET_CHARACTERS_BY_PAGE,
	GET_CHARACTERS_BY_PAGE_RESULT,
} from '../../lib/queries/GetCharactersByPage';
import { Character } from '../models/Character';

export const useCharacters = (page: number) => {
	const query = useQuery(GET_CHARACTERS_BY_PAGE, { variables: { page } });
	const { error, loading } = query;
	if (loading || error) return { error, loading, data: [] as Character[] };
	const data: GET_CHARACTERS_BY_PAGE_RESULT = query.data;
	const characters = data.getCharactersByPage;
	return { error, loading, data: characters };
};
