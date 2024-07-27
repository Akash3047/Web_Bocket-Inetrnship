import express from "express";
import mongoose from "mongoose";
import userRouter from './Routes/user.js';
import bodyParser from 'express';
import productRouter from './Routes/product.js';
import cartRouter from './Routes/cart.js';

const app = express();

app.use(bodyParser.json())

// for testing 
app.get('/', (req,res) => res.json({message:'this is home route'}))


// user Router 
app.use('/api/user', userRouter);

// product Router
app.use('/api/product', productRouter);

// cart Router
app.use('/api/cart', cartRouter);

mongoose.connect(
  "mongodb+srv://hrwebbocket:webbocket20@cluster0.acv3roe.mongodb.net/",
  {
    dbName: "e-commerce"
  }
).then(()=> console.log("MongoDB connected successfully...")).catch((err) => console.log(err));

const port = 8000;
app.listen(port,()=> console.log(`server is running on port ${port}`))