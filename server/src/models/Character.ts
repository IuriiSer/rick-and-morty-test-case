import { Url } from './Common';

export type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: object;
	location: object;
	image: Url;
	episode: Url[];
	url: Url;
	created: string;
};
