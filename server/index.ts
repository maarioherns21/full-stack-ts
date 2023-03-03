import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose, { ConnectOptions } from "mongoose"
import dotenv from "dotenv"

import routerIndex from "./routes/index.js"
import routerUser from "./routes/user.js"


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ extended: true , limit: "30mb"}))


app.use(cors())

app.use("/api/movies" , routerIndex )
app.use("/api/user" , routerUser)


const PORT = process.env.PORT


mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => app.listen(PORT, () => {
    console.log(`Express is listening ${PORT}`)
  }))
  .catch((err) => {
    console.log(
      `Initial Distribution API Database connection error occured -`,
      err
    );
  });