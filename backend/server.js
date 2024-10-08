import express from "express"
import cors from "cors"
import dbss from './config/db.js';
import foodRouter from "./routes/foodRoute.js";
import userRoutes from "./routes/userRoute.js";

import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoutes.js";
const app = express();

const port = 4000;

// middleware
app.use(express.json())
app.use(cors());

app.use('/api/food', foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRoutes)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.get("/", (req, res)=>{
  res.send("api working")
})

app.listen(port, ()=>{
  console.log("Server started on the port 4000")
}) 