const express=require('express');
var api=express();
api.get('/',function(request,response){
    response.send('I am a default root');
})
api.get('/WomensFashion',function(request,response){
    response.send("1)Ethni Wear 2)Western wear 3)Handlooms");
})
api.get('/MensFashion',function(request,response){
    response.send("1)Ethni Wear\n2)Western wear\n3)Handlooms");
})
api.get('/WomensFootwear',function(request,response){
    response.send("1)Shoes\n2)Bellies\n3)Heels");
})
api.get('/MensFootwear',function(request,response){
    response.send("1)Shoes 2)Casuals 3)Sneakers");
})
api.get('/Jwellery',function(request,response){
    response.send("1)Necksets 2)Earrings 3)Bracelets 4)Anklets");
})
api.get('/ElectronicDevices',function(request,response){
    response.send("1)SmartPhones 2)WashingMachines 3)Television 4)Fridges");
})
api.get('/Vehicles',function(request,response){
    response.send("1)MotorBikes 2)Scooters 3)Cars 4)Trucks");
})
api.get('/Fruits',function(request,response){
    response.send("1)Grapes 2)Guva 3)Mango 4)Pineapple 5)Oranges 6)DryFruits");
})
api.get('/DryFruits',function(request,response){
    response.send("1)Raisen 2)Almonds 3)Pista 4)Cashew");
})
api.get('/Vegetables',function(request,response){
    response.send("1)Brinjal 2)Carrot 3)Cauliflower 4)Tomato");
})
api.get('/Decoration items',function(request,response){
    response.send("1)Ballons 2)Ribbons 3)Lights 4)Candles");
})
api.get('/Cakes',function(request,response){
    response.send("1)Chocolate cakes 2)Pineapple cakes 3)BlackForest cakes");
})


api.listen(7010,function(){
    console.log('api server started');
})