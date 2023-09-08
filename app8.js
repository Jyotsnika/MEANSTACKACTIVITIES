const express=require('express');
const { main } = require('./db8');
var api=express();
api.get('/',function(request,response){
    res.send('Iam a default root');
});
api.get('/data',async function(request,response){
    var result=await main();
    response.send(result);
});

api.listen(777,function(){
    console.log('api server started');
})
