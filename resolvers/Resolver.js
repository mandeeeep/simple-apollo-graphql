import { find, filter } from 'lodash';
import games from '../data/GameData.js';
import publishers from '../data/PublisherData.js';

const Resolvers = {
	Query:{
		games: () => games,
		publishers: () => publishers
	}
}

export default Resolvers;