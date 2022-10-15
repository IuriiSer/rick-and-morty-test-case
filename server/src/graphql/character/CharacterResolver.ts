import Services from "../../services";

const Resolvers = {
	Query: {
		//if the user runs the getAllPeople command
		getCharactersByPage: async (_: unknown, { page }: { page: number }) => Services.Character.getCharactersByPage(page),
		//if the user runs the getPerson command:
		getPerson: (_: unknown, { id }: { id: number }) => null,
	},
};
export default Resolvers;
