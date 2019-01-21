/* eslint-disable no-console */
var parser = require('./node_modules/solidity-parser-antlr');
var jsGenerator = require('./src/jsGenerator');
var fs = require('fs');

const data = fs.readFileSync('./smartContract/sample.sol').toString();

const parseSmartContract = ( smartContract) => {
	try {
		return parser.parse(smartContract);
        
	} catch (e) {
		if (e instanceof parser.ParserError) {
			console.log(e.errors);
		}
	}
};


var parsed = parseSmartContract(data);
// fs.writeFileSync('output.json',parsed);

var generatedCode = jsGenerator(parsed);
console.log(generatedCode);