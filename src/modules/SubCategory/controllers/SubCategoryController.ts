import { subCategoryService } from "./../services/SubCategoryService";
import { Request, Response } from "express";

class SubCategoryController {
  public async create(req: Request, res: Response) {
    const { name, category_id } = req.body;
    const subCategory = await subCategoryService.create({
      name,
      category_id,
    });
    return res.json(subCategory);
  }

  public async index(req: Request, res: Response) {
    const subCategories = await subCategoryService.index();
    return res.json(subCategories);
  }
}

export const subCategoryController = new SubCategoryController();
