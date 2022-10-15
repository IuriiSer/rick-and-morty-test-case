import axios from 'axios';

import Interfaces from '../interfaces';
import { Character } from '../models/Character';
import { Url } from '../models/Common';

const API_CHARACTER_ADDRESS = process.env.API_CHARACTER_ADDRESS || 'localhost';

type GetCharacters = (page: number) => Promise<Character[] | null>;

// buisness logic for Characters
class CharacterService {
	/**
	 * if have data in cache returns cached data or make request to get data by API
	 * @param page -> pagination for characters
	 * @returns Character[]
	 */
	public getCharactersByPage: GetCharacters = async (page: number) => {
		if (!page) return [];
		// searchRes is needed when RedisInterface throw errors and returns null value;
		let searchRes = null;
		// isReqSended allows to understand did getCharactersByPageHandler worked without errors
		let isReqSended = false;

		const getCharactersByPageHandler: () => Promise<Character[]> = async () => {
			try {
				const url = `${API_CHARACTER_ADDRESS}?page=${page}`;
				const data = await this.makeRequest<{ results: Character[] }>(url);
				searchRes = data.results;
				isReqSended = true;
				return data.results;
			} catch (err) {
				if (err instanceof Error) throw new Error(err.message);
				throw new Error(`something went wrong during getting characters`);
			}
		};

		const dataToReturn = await Interfaces.Redis.getSetCache<Character[]>(
			`getCharacters?page=${page}`,
			async () => {
				return await getCharactersByPageHandler();
			},
		);

		// if we catch errors before making callback func in Interfaces.Redis.getSetCache
		// we should return data without caching
		if (!isReqSended) {
			try {
				// if errors become after callback func -> just return searchRes
				if (searchRes) return searchRes;
				// if before -> make request manualy
				return await getCharactersByPageHandler();
			} catch (_err) {
				return [] as Character[];
			}
		}

		return dataToReturn || searchRes;
	};

	private async makeRequest<T>(url: Url): Promise<T> {
		try {
			const res = await axios.get<T>(url);
			if (res.status !== 200)
				throw new Error(`failed to get data from ${url}, status ${res.status}`);
			return res.data;
		} catch (err) {
			if (err instanceof Error) throw new Error(err.message);
			throw new Error(`something went wrong during making to ${url}`);
		}
	}
}

export const character = new CharacterService();
