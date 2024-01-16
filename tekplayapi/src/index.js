import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connnectDB from "./conf/db.js";
import apiRouter from "./routes/router.js";
import cors from "cors";

const app = express();
connnectDB();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));
// app.use(helmet({
//     crossOriginResourcePolicy:"cross-origin",
//     crossOriginOpenerPolicy:"cross-origin",
//     crossOriginEmbedderPolicy:"cross-origin"
// }))
app.use(cors({ preflightContinue: true, origin: true }));

app.use("/api", apiRouter);

export default app;
