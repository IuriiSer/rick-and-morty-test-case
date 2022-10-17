import Services from '../../services';

const Resolvers = {
	Query: {
		getCharactersByPage: async (_: unknown, { page }: { page: number }) =>
			Services.Character.getCharactersByPage(page),
	},
};
export default Resolvers;
