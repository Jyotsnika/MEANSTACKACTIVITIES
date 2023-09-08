const express=require('express');
const { main } = require('./db2');
var api=express();
api.get('/',function(request,response){
    res.send('Iam a default root');
});
api.get('/data',async function(request,response){
    var result2=await main();
    response.send(result2);
});

api.listen(777,function(){
    console.log('api server started');
})
