import { Router } from "express";
import { getOrder } from "../api/order/controller/order";
import { checkJWT } from "../middleware/session";

const router = Router();

router.get("/", checkJWT, getOrder);

export { router };
