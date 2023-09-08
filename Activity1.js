const express=require('express');
var api=express();
api.listen(2000,function(){
    console.log('api server started');
})