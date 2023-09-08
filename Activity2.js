const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})

api.listen(2000,function(){
    console.log('api server started');
})