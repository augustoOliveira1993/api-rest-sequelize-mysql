import { Router } from "express";
import { tagController } from "../controllers/tagController";

const tagRouters = Router();

tagRouters.get("/", tagController.index);
tagRouters.post("/", tagController.create);

export default tagRouters;
