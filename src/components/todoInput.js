import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.addTodo(),
	Escape: () => context.actions.updateInput(''),
};

const TodoInput = () =>
	<input
		value={ context.state.input }
		onChange={ (event) =>
			// eslint-disable-next-line no-console
			context.actions.setInput(event.target.value) }
		onKeyUp={ (event) =>
			actionKeys[event.code] && actionKeys[event.code]() }
	/>;

export default TodoInput;
