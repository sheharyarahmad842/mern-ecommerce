import express from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
