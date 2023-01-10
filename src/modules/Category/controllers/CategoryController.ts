import { Request, Response } from "express";
import { categoryService } from "../services/CategoryService";

class CategoryController {
  public async create(req: Request, res: Response) {
    const { name, sub_category_id } = req.body;
    const category = await categoryService.create({
      name,
      sub_category_id,
    });
    return res.json(category);
  }

  public async index(req: Request, res: Response) {
    const categories = await categoryService.index();
    return res.json(categories);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.findById(id);
    return res.json(category);
  }
}

export const categoryController = new CategoryController();
