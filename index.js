//    var http = require('http');
     
//    var server = http.createServer(function handler(req, res) 
//    {
        //res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end('BBBBBBBBBBBBB');
//    });
     
    //server.listen(9000);
//    server.listen(process.env.PORT || 5000);
//    console.log('Server running at http://127.0.0.1:9000/');



const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('XGAMER'));
app.get('/', function(req, res)
{
  res.send('id: ' + req.query.id+1);
});
app.listen(process.env.PORT || 5000);
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
