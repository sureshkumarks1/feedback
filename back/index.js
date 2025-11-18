const express = require('express');
const feedbackRoutes = require('./router/feedbackroute');

require('dotenv').config();
const app= express();
const PORT= process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("API is running...");
});

app.use('/feedback', feedbackRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

});