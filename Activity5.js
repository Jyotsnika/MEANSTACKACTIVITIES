const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})

api.get('/greet/:name',function(request,response){
    const name=request.params.name;
    response.send(`Hello, ${name}!`);
})

api.listen(4005,function(){
    console.log('api server started');
})