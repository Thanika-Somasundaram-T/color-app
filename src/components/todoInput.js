import { React } from 'react';
import context from '../core/context';

const TodoInput = () =>
	<input
		value={ context.state.input }
		onChange={ (event) => context.actions.setInput(event.target.value) }
	/>;

export default TodoInput;
