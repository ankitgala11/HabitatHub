import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal sever error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App is running on PORT 3000`);
});
