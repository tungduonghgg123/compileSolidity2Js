/* eslint-disable no-console */
const parse = require('./src/parser');
const jsGenerator = require('./src/jsGenerator');
const fs = require('fs');

const soliditySC = fs.readFileSync('./smartContract/Input/sample.sol').toString();

var parsedSoliditySC = parse(soliditySC);
// fs.writeFileSync('output.json',parsedSoliditySC);

var generatedJsSC = jsGenerator(parsedSoliditySC);
console.log(generatedJsSC);