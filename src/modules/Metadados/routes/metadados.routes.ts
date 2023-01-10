import { Router } from "express";
import ModeloController from "../controllers/MetadadoController";

const metadadoRouters = Router();
const metadadoController = new ModeloController();

metadadoRouters.post("/", metadadoController.create);
metadadoRouters.get("/", metadadoController.index);

export default metadadoRouters;
