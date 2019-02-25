import 'optional-chaining-plugin';
import 'reactobem/customElements';
import { AtomProvider, Store, devTools } from 'atom4';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { ErrorBoundary } from './components/ErrorBoundary';


const store = new Store();
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
