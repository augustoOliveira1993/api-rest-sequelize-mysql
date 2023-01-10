import AppError from "../../../errors/AppError";
import SubCategoryModel from "../../SubCategory/model/SubCategoryModel";
import CategoryModel from "../model/CategoryModel";

interface IRequest {
  name: string;
  sub_category_id: number;
}

class CategoryService {
  public async create({ name, sub_category_id }: IRequest) {
    const categoryExist = await CategoryModel.findByName(name);
    if (categoryExist) {
      throw new AppError("Já existe categoria com esse nome.");
    }

    const category = CategoryModel.create({
      name,
      sub_category_id,
    });
    return category;
  }

  public async index() {
    const categories = await CategoryModel.findAll({
      order: [["id", "DESC"]],
      include: SubCategoryModel,
    });
    return categories;
  }

  public async findById(id: string) {
    const category = await CategoryModel.findOne({
      where: {
        id,
      },
      include: SubCategoryModel,
    });
    return category;
  }
}
export const categoryService = new CategoryService();
