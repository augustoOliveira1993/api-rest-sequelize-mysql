import { Router } from "express";
import { categoryController } from "../controllers/CategoryController";
const categoryRouters = Router();

categoryRouters.post("/", categoryController.create);
categoryRouters.get("/:id", categoryController.findById);
categoryRouters.get("/", categoryController.index);

export default categoryRouters;
