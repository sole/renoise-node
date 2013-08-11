# renoise-node

This is a work in progress for providing some tools to work with [Renoise](http://renoise.com) files in node.js land.

If you have any ammendments or can improve this, feel free to fork the project, do your magic and then send me a pull request ;-)

## Installing

````bash
npm install renoise
````

## Usage

Currently you can only convert a song's XML file to JSON, which is more palatable to humans:

````javascript
var renoise = require('renoise');

renoise.loadAsJSON('/path/to/song.xrns', function(songJSON) {
	console.log('Got the JSON file!');
});
````

## Author

[Soledad Penadés](http://soledadpenades.com)

## Acknowledgments & thanks

Lots of thanks fly to...

* the Renoise team for storing the songs in a hackable format (ZIP+XML), which in turn encourages people to build tools and things for Renoise. YAY!
* the authors of [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) and [node-unzip](https://github.com/nearinfinity/node-unzip) that I'm using too. Both libraries are easy to use and do their job amazingly well. Awesome.
