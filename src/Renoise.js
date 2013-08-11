var fs = require('fs');
var unzip = require('unzip');
var xml2js = require('xml2js');

// Open XRNS file and extract the Song.xml file only
function extractSongXML(pathToXRNS, callback) {

	fs.createReadStream(pathToXRNS)
		.pipe(unzip.Parse())
		.on('entry', function (entry) {
			
			var fileName = entry.path;
			var type = entry.type; // 'Directory' or 'File'
			var size = entry.size;

			if (fileName === "Song.xml") {
				var filedata = '';
				entry.on('data', function(chunk) {
					filedata += chunk;
				});

				entry.on('end', function() {
					callback(filedata);
				});

			} else {
				entry.autodrain();
			}
		});

}

function loadAsJSON(filename, callback) {
	
	var xml = extractSongXML(filename, function(xml) {
		
		var parser = new xml2js.Parser({ explicitArray: false });
		parser.parseString(xml, function(err, result) {
			console.dir(result);
			console.log('Done');
			callback(result);
		});
		
	});

}

module.exports = {
	loadAsJSON: loadAsJSON
};
