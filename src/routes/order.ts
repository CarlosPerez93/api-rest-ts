import { Router } from "express";
import { getOrder } from "../controller/order";
import { checkJWT } from "../middleware/session";

const router = Router();

router.get("/", checkJWT, getOrder);

export { router };
