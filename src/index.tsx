import 'reactobem/customElements';
import { AtomProvider, Store, devTools } from 'atom4';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { Config } from './services/Config';
import { ErrorBoundary } from './components/ErrorBoundary';


const store = new Store();
store.getInstance(Config).setBackendUrl('http://localhost:4000');
devTools(store);

ReactDOM.render(
	<ErrorBoundary>
		<Suspense fallback={<div>Loading...</div>}>
			<AtomProvider store={store}>
				<App />
			</AtomProvider>
		</Suspense>
	</ErrorBoundary>,
	document.querySelector('#root'),
);
