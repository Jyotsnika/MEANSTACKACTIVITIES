const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})
api.get('/friend',function(request,response){
    response.send("Happy Friendship Day");
})
api.get('/enemy',function(request,response){
    response.send("Be careful!");
})
api.listen(5000,function(){
    console.log('api server started');
})