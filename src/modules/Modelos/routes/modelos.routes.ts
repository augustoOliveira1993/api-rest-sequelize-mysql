import { NextFunction, Request, Response, Router } from "express";
import AppError from "../../../errors/AppError";
import ModeloController from "../controllers/ModeloController";

const modelosRouters = Router();
const modeloController = new ModeloController();

modelosRouters.post("/", modeloController.create);
modelosRouters.get("/", modeloController.index);
modelosRouters.get("/:id", modeloController.findById);
modelosRouters.post("/gerar/:id", modeloController.geraDocumento);

export default modelosRouters;
