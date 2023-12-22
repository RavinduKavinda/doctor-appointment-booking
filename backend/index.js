import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

//Route
app.get('/',(req,res) => {
    res.send('Api is working')
});

//DB connection
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try{
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("MongoDB connected");

    }catch(err){
        console.log("MongoDB not connected")
    }
}

//Middleware 
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/users',userRoute);


//Server Stat
app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port);
})
