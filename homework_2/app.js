const express=require('express');
const app=express();
const citiesController=require('./cities.controller');

const port=3000;
app.listen(port,()=>{
    console.log(`Port is running on port ${port}`)
})

app.use('/cities',citiesController);