import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Paypal
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//Unused route handler
app.use(notFound);

//Custom error handling
app.use(errorHandler);

app.listen(5000, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
