import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
