import express from "express";
import mongoose from "mongoose"
import {config} from "dotenv"
import userRouter from "./routes/User-routes.js";
import blogRouter from "./routes/Blog-routes.js"
import cors from "cors";

const app = express();

config({
    path : "./config.env"
})

app.use(express.json());
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    credentials : true,
})); 

//middleware
app.use("/api/user" , userRouter);
app.use("/api/blog" , blogRouter);

mongoose.connect(process.env.MONGO_URL , {
    dbName : "backendapi",
})
.then(() => app.listen(process.env.PORT))
.then(() => console.log(`Connected to Database and Listening to localhost ${process.env.PORT}`))
.catch((err) => console.log(err));

