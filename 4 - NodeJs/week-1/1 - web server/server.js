/**
 * Exercise 3: Create an HTTP web server
 */

import { createServer } from 'http';
import { promises as fsPromises } from 'fs';

//create a server
let server = createServer(async function (req, res) {
	if (req.url === '/') {
      // Read index.html
      const data = await fsPromises.readFile('index.html', 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
	}
	if (req.url === '/index.js') {
      // Read index.js
      const data = await fsPromises.readFile('index.js', 'utf8');
      res.setHeader('Content-Type', 'application/javascript');
      res.writeHead(200);
      res.end(data);
	}
	if (req.url === '/style.css') {
		// Read style.css
		const data = await fsPromises.readFile('style.css', 'utf8');
		res.setHeader('Content-Type', 'text/css');
		res.writeHead(200);
		res.end(data);
	  }
});

server.listen(3000); // The server starts to listen on port 3000
