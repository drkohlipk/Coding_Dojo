var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	console.log('client request URL: ', request.url);

	if (request.url === '/') {
		fs.readFile('../index.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/ninjas') {
		fs.readFile('../ninjas.html', 'utf8', function(errors,
			contents) {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/dojos/new') {
		fs.readFile('../dojos.html', 'utf8', function(errors,
			contents) {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/css_boilerplate') {
		fs.readFile('../css/css_boilerplate.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {
				'Content-Type': 'text/css'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/Watercolor_fly') {
		fs.readFile('../images/Watercolor_fly.jpg', function(errors,
			contents) {
			response.writeHead(200, {
				'Content-Type': 'image/jpeg'
			});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/10_Second_Ninja') {
		fs.readFile('../images/10_Second_Ninja.png', function(errors,
			contents) {
			response.writeHead(200, {
				'Content-Type': 'image/png'
			});
			response.write(contents);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(6789);
console.log("Running in localhost at port 6789");
