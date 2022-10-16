import { Url } from './Common';

type Origin = {
	name: string;
	url: string;
};

type Location = {
	name: string;
	url: string;
};

export type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: Url;
	episode: Url[];
	url: Url;
	created: string;
};
