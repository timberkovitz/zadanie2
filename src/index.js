const http = require("http");
const fs = require("fs");

var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express


var server = app.listen(8888, function(){
    console.log("Server started at 8888");
})
app.get('/', function(request, response){     
    console.log(`Запрошенный адрес: ${request.url}`);
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function(error, data)
	{             
        if(error)
		{                 
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else
		{
            response.end(data);
        }
	});
})  
  
  
  
