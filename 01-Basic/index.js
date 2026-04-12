
import http from "http"

const port = 8000;

const server = http.createServer((red,res)=>{
    res.end("This is my First Server")
})
server.listen(port,()=>{
    console.log("Server is Started...")
})
