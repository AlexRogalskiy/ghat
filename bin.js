#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ghat = require('.');

const cli = meow(`
	Usage
	  $ ghat <source>

	Examples
	  $ ghat fregante/workflows/npm.yml
`);

ghat(cli.input[0]).then(console.log, error => {
	console.error(error.stack);
	process.exit(1);
});