import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { REACT_APP_GRAPHQL_ADDRESS } = process.env;

const client = new ApolloClient({
	uri: REACT_APP_GRAPHQL_ADDRESS,
	cache: new InMemoryCache(),
});

root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
);
