import { Request, Response } from "express";
import { tagService } from "../services/tagService";

class TagController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;
    const tag = await tagService.create({
      name,
    });
    return res.json(tag);
  }

  public async index(req: Request, res: Response) {
    const tags = await tagService.index();
    return res.json(tags);
  }
}

export const tagController = new TagController();
