import { subCategoryController } from "./../controllers/SubCategoryController";
import { Router } from "express";

const subCategoryRouters = Router();

subCategoryRouters.get("/", subCategoryController.index);
subCategoryRouters.post("/", subCategoryController.create);

export default subCategoryRouters;
