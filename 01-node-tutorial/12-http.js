const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/','/home','/welcome'){
        res.write('Welcome to Homepage');
        res.end();
    } 
    else if(req.url === '/about'){
        res.write('About Us');
        res.end();
    }else
    res.end(`
<h1>Oops!</h1>
<p> Can't find the page you're looking for</p>
<a href ="/">Back Home</a>`)
});

server.listen(5000)
