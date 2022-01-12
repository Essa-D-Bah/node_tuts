const http = require('http');

const server = http.createServer((req, res) => {
  res.write(`
       <a href="/">Home</a>
       <a href="/about">About</a>
    
    `);
  if (req.url === '/') {
    res.end('Welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.end(`
        <h1 style="color:red">Opps!</h1>
        <p>There seems to be a problem</p>
        <a href="/">Go Back</a>
    `);
  }
});

server.listen(5000);
