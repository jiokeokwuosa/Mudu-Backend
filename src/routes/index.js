import { Router } from "express";
import authRouter from "./auth.route";
import ListRoute from "./list.route";

const router = Router();

router.use("/list", ListRoute);
router.use("/auth", authRouter);

export default router;
