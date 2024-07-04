import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import cors from 'cors'


const app = express();
dotenv.config();
app.use(cors())

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

app.listen(PORT, "localhost", () => {
  console.log(`Server Started on port ${PORT}`);
});
