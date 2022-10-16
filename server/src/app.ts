import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const config = dotenv.config();
dotenvExpand.expand(config);

import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { DocumentNode } from 'graphql';
import { IExecutableSchemaDefinition } from '@graphql-tools/schema';

import { Schemas, Resolvers } from './graphql';

const { PORT } = process.env;

async function startApolloServer(
	schema: DocumentNode[],
	resolvers: IExecutableSchemaDefinition['resolvers'],
) {
	const app = express();
	const httpServer = http.createServer(app);
	const server = new ApolloServer({
		typeDefs: schema,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});
	await server.start();
	server.applyMiddleware({ app });
	await new Promise<void>(
		(resolve) => httpServer.listen({ port: PORT }, resolve), //run the server on port 4000
	);
	console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

//in the end, run the server and pass in our Schema and Resolver.
void startApolloServer(Schemas, Resolvers);
