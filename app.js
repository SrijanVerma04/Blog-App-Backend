import express from "express";
import mongoose from "mongoose"
import userRouter from "./routes/User-routes.js";
import blogRouter from "./routes/Blog-routes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    credentials : true,
})); 

//middleware
app.use("/api/user" , userRouter);
app.use("/api/blog" , blogRouter);

mongoose.connect('mongodb+srv://srijanverma102:wVNnQfBrkSEBpM8v@cluster0.j8kgcpw.mongodb.net/?retryWrites=true&w=majority')
.then(() => app.listen(4000))
.then(() => console.log("Connected to Database and Listening to localhost 4000"))
.catch((err) => console.log(err));

