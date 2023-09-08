const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})

api.get('/user',function(request,response){
    const username=request.query.username;
    

    const pwd=request.query.pwd;
    response.send(`Welcome ${username},Your password is, ${pwd}!`);
})


api.listen(3011,function(){
    console.log('api server started');
})