var http=require('http');
var dt= require('./myModule');
 
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'Text/HTML'});
    res.write("current date and time is : "+dt.myDateTime());
    res.end();
}).listen(8080);