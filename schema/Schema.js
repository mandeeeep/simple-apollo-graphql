import Game from './Game.js';
import Publisher from './Publisher.js';

const Query = `
type Query{
	games: [Game]	
	publishers: [Publisher]
}
`;

const Schema = `
schema {
	query: Query
}
`;

export {Query, Schema, Game, Publisher};