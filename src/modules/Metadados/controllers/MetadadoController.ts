import { Request, Response } from "express";
import MetadadoService from "../services/MetadadoService";

export default class ModeloController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, type, required } = req.body;
    const metadadoService = new MetadadoService();
    const metadado = await metadadoService.create({
      name,
      type,
      required,
    });

    return res.json(metadado);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const metadadoService = new MetadadoService();
    const metadados = await metadadoService.index();
    return res.json(metadados);
  }
}
