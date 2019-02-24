import { Singletone } from 'atom4';

export class Config extends Singletone {
	backendUrl = '';
	setBackendUrl(url: string) {
		this.backendUrl = url;
	}
}
