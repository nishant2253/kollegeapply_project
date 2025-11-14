import { Router } from "express";
import { getFees } from "../controllers/fees.controller.js";

const router = Router();

router.get("/", getFees);

export default router;
