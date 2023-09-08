const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})

api.get('/data',function(request,response){
    response.send("Welcome to express");
})

api.listen(4000,function(){
    console.log('api server started');
})