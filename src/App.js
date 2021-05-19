import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import Input from './components/todoInput';

const App = () => {
	useEffect(SampleService.sayHai, []);
	const style = {
		background: context.state.color,
	};

	return (
		<div style={ style }className="App">
			<div>input: { context.state.input }</div>
			<div>{ Input() }</div>
			<div>{ SimpleButton() }</div>
		</div>
	);
};

export default App;
