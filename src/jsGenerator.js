/* eslint-disable no-console */
/* eslint-disable indent */
const jsGenerator = (node) => {
	switch (node.type) {
	case 'SourceUnit':
		return node.children.map(jsGenerator).join('\n');
	case 'PragmaDirective':
		return '//declare version solidity';
	case 'ContractDefinition':
		return (
			'class ' + node.name + '{\n' + node.subNodes.map(jsGenerator).join(';\n') +';\n}'
		);
	case 'FunctionDefinition':
        return (
            'function ' + node.name + '(' + node.parameters.parameters.map(jsGenerator).join(',') +')'  +
			'{\n' + jsGenerator(node.body) + '\n}'
        );
	case 'Block':
		return node.statements.map(jsGenerator).join(';\n') + ';' ;
	case 'ExpressionStatement':
		return jsGenerator(node.expression);
	case 'StateVariableDeclaration' :
	case 'VariableDeclarationStatement' :
		if (node.initialValue !== null ) 
			return (
				node.variables.map(jsGenerator) + ' = ' + jsGenerator(node.initialValue)
			);
		return node.variables.map(jsGenerator);
		
	case 'ReturnStatement':
		return 'return ' + jsGenerator(node.expression);
	case 'StringLiteral':
		return node.value;
    case 'VariableDeclaration':
        return (
            'var ' + node.name 
        );
    case 'Parameter':
        return node.name;
	case 'BinaryOperation':
		return (
			jsGenerator(node.left) + ` ${node.operator} ` + jsGenerator(node.right)
		);
	case 'Identifier':
		return node.name;
	default:
		console.log(`Ahihi unhandled ${node.type}\n`);
		break;
	}
};
module.exports = jsGenerator;