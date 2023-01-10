import AppError from "../../../errors/AppError";
import CategoryModel from "../../Category/model/CategoryModel";
import SubCategoryModel from "../model/SubCategoryModel";

interface IRequest {
  name: string;
  category_id: number;
}

class SubCategoryService {
  public async create({ name, category_id }: IRequest) {
    const subCategoryExist = await SubCategoryModel.findByName(name);
    if (subCategoryExist) {
      throw new AppError("Já existe Sub Categoria com esse nome.");
    }

    const subCategory = await SubCategoryModel.create({
      name,
      category_id,
    });
    return subCategory;
  }

  public async index() {
    const subCategories = SubCategoryModel.findAll({
      order: [["id", "DESC"]],
    });
    return subCategories;
  }
}
export const subCategoryService = new SubCategoryService();
