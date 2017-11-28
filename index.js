const { spawn } = require('child_process');
const process = require('process');
const path = require('path');
var exec = require('child_process').exec;

let scriptPath = path.join('node_modules','.bin','cucumber-js');

const config = require(process.cwd()+'\/features\/glue.json');


ls = null;

function AsyncIteration(list,fn){
	
	var index = 0;
	
	fn(list[index])
		.then(() => 
		{
			++index;
			if(list.length != index)
				fn(list[index]);
		});
	
}

function work(value){
	return new Promise(function(resolve,reject)
	{
		//node_modules//.bin//cucucmber-js {Win}
		//
		var child = exec(`${scriptPath} features/${value.feature_name} --require features/${value.step_definition}`);
		
		child.stdout.on('data', (data) => {
		  console.log(`${data}`);
		});
		
		child.stderr.on('data', (data) => {
		  console.log(`${data}`);
		});
		
		child.on('close', (code) => {
		  console.log(`child process exited with code ${code}`);
		  resolve();
		});
	});
	
}

AsyncIteration(config,work);


