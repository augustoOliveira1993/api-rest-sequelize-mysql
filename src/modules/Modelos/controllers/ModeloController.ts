import ModeloService from "../services/ModeloService";
import { Request, Response } from "express";

export default class ModeloController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { title, content, name, description, category_id, sub_category_id } =
      req.body;
    const modeloService = new ModeloService();
    const modelo = await modeloService.create({
      title,
      content,
      name,
      description,
      category_id,
      sub_category_id,
    });

    return res.json(modelo);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const modeloService = new ModeloService();
    const modelos = await modeloService.index();
    return res.json(modelos);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const modeloService = new ModeloService();
    const modelo = await modeloService.findById(id);
    return res.json(modelo);
  }

  public async geraDocumento(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { variaveis } = req.body;
    const modeloService = new ModeloService();
    const modelo = await modeloService.gerarDocumento(id, variaveis);
    return res.json(modelo);
  }
}
