var stringsAndFlowComments = /(`(?:.|\s)*?`|'(?:.|\s)*?'|`(?:.|\s)*?`|"(?:.|\s)*?"|\/\*.*?(?::{1,2}|flow-include).*?(?:.|\s)*?\*\/)/;

function removeComments(code){
	return code.split(stringsAndFlowComments)
	.map( function(chunk){
		if(chunk.trim().search(/\/\*.*?(?::{1,2}|flow-include).*?(?:.|\s)*?\*\//) === 0){
			var include = /\/\*.*?(?::{2}|flow-include)(.*?(?:.|\s)*)\*\//;
			var inline  = /\/\*(.*?:.*?(?:.|\s)*)\*\//;
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