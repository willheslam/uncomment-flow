var stringsAndFlowComments = /(`(?:[^`\\]|\\.)*?`|'(?:[^'\\]|\\.)*?'|"(?:[^"\\]|\\.)*?"|\/\*.*?(?::{1,2}|flow-include).*?[\s\S]*?\*\/)/;

function removeComments(code){
	return code.split(stringsAndFlowComments)
	.map( function(chunk){
		if(chunk.trim().search(/\/\*.*?(?::{1,2}|flow-include).*?[\s\S]*?\*\//) === 0){
			var include = /\/\*.*?(?::{2}|flow-include)(.*?[\s\S]*)\*\//;
			var inline  = /\/\*(.*?:.*?[\s\S]*)\*\//;
			var pattern = include.test(chunk) ? include : inline;
		
			var flowInside = pattern.exec(chunk);
			if(flowInside && flowInside.length >= 2 && flowInside[1].length > 0){
				return flowInside[1];
			}
		}
		return chunk;
	}).join('');
}

module.exports = removeComments;