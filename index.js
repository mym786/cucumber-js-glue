const { spawn } = require('child_process');
const process = require('process');
const os = require('os');

const config = require(process.cwd()+'\/features\/glue.json');
let _process = "";



if ( os.platform() == 'win32'){
	_process = "cmd.exe";
}
else if( os.platform() == 'linux')
{
	_process = "sh";
}	

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
		ls = spawn(_process, ['/c', `node_modules\\.bin\\cucumber-js features/${value.feature_name} --require features/${value.step_definition}`]);
		
		ls.stdout.on('data', (data) => {
		  console.log(`${data}`);
		});
		
		ls.stderr.on('data', (data) => {
		  console.log(`${data}`);
		});
		
		ls.on('close', (code) => {
		  console.log(`child process exited with code ${code}`);
		  resolve();
		});
	});
	
}

AsyncIteration(config,work);


