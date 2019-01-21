/* eslint-disable no-console */
const parse = require('./src/parser');
const jsGenerator = require('./src/jsGenerator');
const fs = require('fs');

/**
Change the solidity smart contract in here 
 */
const soliditySC = fs.readFileSync('./smartContract/Input/sample.sol').toString();

/**
Parsing, transform solidity code to AST (Abstract Syntax Tree) 
*/
var parsedSoliditySC = parse(soliditySC);
//fs.writeFileSync('./smartContract/Input/smartContractAST.json',JSON.stringify(parsedSoliditySC));

/**
Java script code generator. 
At the moment, it just supports super simple solidity code

 */
var generatedJsSC = jsGenerator(parsedSoliditySC);


/**
Hot dog, show off time!!
 */
console.log(generatedJsSC);