import { gql } from 'apollo-server-express'; //will create a schema
const Schema = gql`
	type Origin {
		name: String
		url: String
	}
	
	type Location {
		name: String
		url: String
	}

	type Character {
		id: ID!
		name: String
		status: String
		species: String
		type: String
		gender: String
		origin: Origin
		location: Location
		image: String
		episode: [String]
		url: String
		created: String
	}

	#handle user commands
	type Query {
		getCharactersByPage(page: Int): [Character] #will return multiple Person instances
		getPerson(id: Int): Character #has an argument of 'id' of type Integer
	}
`;
export default Schema;
//export this Schema so we can use it in our project
