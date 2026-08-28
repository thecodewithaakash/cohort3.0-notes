const http = require('http')

const server = http.createServer((req,res) => {
    // console.log("Hello mom!");

    res.writeHead(200,{
        "content-type":"application/json"
    })
    
    // res.end('Hello mom!')
    res.end(JSON.stringify({
           message: "Hello from Node.js"
    }))
})


server.listen(3000,() => console.log("server listening on http://localhost:3000"))