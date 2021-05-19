// import config from './config';
import { rndString } from '@laufire/utils/random';
import config from './config';

const refreshIDLength = 4;

const seed = {
	input: '',
	color: config.color,
	refreshID: rndString(refreshIDLength),
};

export default seed;
