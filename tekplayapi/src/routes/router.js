import { Router } from "express";
import healthCheck from "../controllers/healthCheck.js";
import authRouter from "./authRouter.js";
import blogRouter from "./blogRouter.js";


const apiRouter = Router();

apiRouter.use("/hc",healthCheck);
apiRouter.use("/auth",authRouter);
apiRouter.use("/blogs",blogRouter);

export default apiRouter;