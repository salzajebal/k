import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import adminRouter from "./admin";
import trackRouter from "./track";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(adminRouter);
router.use(trackRouter);
router.use(statsRouter);

export default router;
