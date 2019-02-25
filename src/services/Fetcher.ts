import { getModel, fetchJSON } from 'atom4';
import { config } from '../config';

export function fetchGQL<T>(query: string): T {
	return fetchJSONData<{ data: T }>('/api/graphql?query=' + encodeURI(query)).data;
}

export function fetchJSONData<T>(url: string, params?: RequestInit): T {
	return fetchJSON(config.backendURL + url, params);
}
