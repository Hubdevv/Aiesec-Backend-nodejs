import "express-async-errors";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB, connectServer } from "./config";

import notFoundRoute from "./middlewares/notFoundRoute";
import errorHandler from "./middlewares/errorHandler";
import userRouter from "./routes/user";
//const blogs = require('./routes/blogs');
import blogs from "./routes/blogs"
const app = express();

// Middlewares

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.static('./views'));
// Routes
app.get("/", (req, res) => {
    res.send("CC");
});
app.use("/api/v1/user", userRouter);
//app.post("/api/v1/blogs", blogs);

app.get('/blogs', (req, res) => {
    res.render('blog');
})
app.use(errorHandler);
app.use(notFoundRoute);

// Connection
connectDB();
connectServer(app);