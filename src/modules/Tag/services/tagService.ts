import AppError from "../../../errors/AppError";
import TagModel from "../model/tagModel";
import CategoryModel from "../model/tagModel";

interface IRequest {
  name: string;
}

class TagService {
  public async create({ name }: IRequest) {
    const tagExist = await TagModel.findByName(name);
    if (tagExist) {
      throw new AppError("Já existe Tag com esse nome.");
    }
    const tag = TagModel.create({
      name,
    });
    return tag;
  }

  public async index() {
    const tags = TagModel.findAll({
      order: [["name", "ASC"]],
    });
    return tags;
  }
}
export const tagService = new TagService();
