import { getModel, fetchJSON } from 'atom4';
import { Config } from './Config';

export function fetchGQL<T>(query: string): T {
	return fetchJSONData<{ data: T }>('/api/graphql?query=' + encodeURI(query)).data;
}

export function fetchJSONData<T>(url: string, params?: RequestInit): T {
	return fetchJSON(getModel(Config).backendUrl + url, params);
}
