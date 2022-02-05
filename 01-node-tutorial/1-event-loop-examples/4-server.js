const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Request event');
    res.write('Hello World');
    res.end()
})

server.listen(5000,()=>{
    console.log('Server Listening on port : 5000....')
})
