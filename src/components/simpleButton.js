import { React } from 'react';
import context from '../core/context';

const SimpleButton = () =>
	<button onClick={ () =>
		context.actions.changeColor() }
	>Change Colour</button>;

export default SimpleButton;
