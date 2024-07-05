import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import cors from 'cors';
import userRoute from "./routes/user.route.js"


const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 4010;
const URI = process.env.MongoDBURI;

// connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connection Successful`);
} catch (error) {
  console.log(`Error :`, error);
}

// Defining Routes

app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, "localhost", () => {
  console.log(`Server Started on port ${PORT}`);
});
