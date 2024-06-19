import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./src/routes.js"
import dotenv from "dotenv"
import { errorHandler } from './src/middleware/errorHandler.js'

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.use(errorHandler);

const PORT = process.env.PORT;



async function connectToDatabase() {
  
  const dbURL = process.env.dbURL;
  
  
  try {
    await mongoose.connect(dbURL);
    
    console.log('Connected to MongoDB');
    
    
  }
  catch (error){
    console.error("Error during database initialization", error);
  }
  
}

// Call the connectToDatabase function and then start the server
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to database:', err);
});

