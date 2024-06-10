// Run by Node.js
const readline = require('readline');
let input = [];
(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input = line.split(' ').map(Number);
		rl.close();
	}
	let salt = (7 * input[0]) / 100;
	let water = input[0] + input[1];
	let result = (salt / water) * 100;
		
	console.log((Math.floor(result * 100) / 100).toFixed(2));
	process.exit();
})();
