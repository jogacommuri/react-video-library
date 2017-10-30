import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import Search from './search';

const Four0Four = () => <h1>404 !! page not found !!</h1>;

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={Four0Four} />
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById('app'));
