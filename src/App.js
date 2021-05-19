import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import Input from './components/todoInput';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>input: { context.state.input }</div>
			<div>{ SimpleButton() }</div>
			<div>{ Input() }</div>
		</div>
	);
};

export default App;
