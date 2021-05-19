const setInput = (dummy, input) => ({
	input,
});

const changeColor = ({ state }) => ({
	color: state.input,
});
const actions = {
	setInput,
	changeColor,
};

export default actions;
