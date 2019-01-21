/* eslint-disable no-console */
var parser = require('solidity-parser-antlr');

const parse = ( smartContract) => {
	try {
		return parser.parse(smartContract);
        
	} catch (e) {
		if (e instanceof parser.ParserError) {
			console.log(e.errors);
		}
	}
};

module.exports = parse;