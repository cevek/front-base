import { Singletone, fetchJSON } from 'atom4';
import { Mutation, Query } from '../graphqlschema';
import { graphqlFactory } from 'typeusage/graphql';

export class Server extends Singletone {
	query = graphqlFactory<Query>(postGraphql);
	mutation = graphqlFactory<Mutation>(postGraphql);
}

function postGraphql(query: string) {
	return fetchJSON('http://localhost:4000/api/graphql', {
		method: 'POST',
		body: JSON.stringify({ query }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
