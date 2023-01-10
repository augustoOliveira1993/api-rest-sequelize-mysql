import ModeloModel from "../model/ModeloModel";
import AppError from "../../../errors/AppError";
import CategoryModel from "../../Category/model/CategoryModel";
import SubCategoryModel from "../../SubCategory/model/SubCategoryModel";

interface IRequest {
  id?: number;
  title: string;
  content: string;
  name: string;
  description: string;
  category_id?: number;
  sub_category_id?: number;
}

interface TypeVariavel {
  name: string;
  value: string;
}
interface IResponse {}

export default class ModeloService {
  public async create({
    title,
    content,
    name,
    description,
    category_id,
    sub_category_id,
  }: IRequest): Promise<ModeloModel> {
    const modeloModel = ModeloModel;

    const modelExist = await modeloModel.findByTitle(title);
    if (modelExist) {
      throw new AppError(
        `Modelo ja existe com esse title. id=${modelExist.getDataValue("id")}`
      );
    }

    const modelo = await modeloModel.create({
      title,
      content,
      name,
      description,
      category_id,
      sub_category_id,
    });

    return modelo;
  }

  public async index(): Promise<ModeloModel[]> {
    const modeloModel = ModeloModel;
    const modelos = await modeloModel.findAll({
      order: [["name", "ASC"]],
      include: [CategoryModel, SubCategoryModel],
    });
    return modelos;
  }

  public async findById(id: string) {
    const modelo = await ModeloModel.findOne({
      where: {
        id: id,
      },
      include: [CategoryModel, SubCategoryModel],
    });

    return modelo;
  }

  public async gerarDocumento(id: string, variaveis: TypeVariavel[]) {
    const modelo = await ModeloModel.findOne({
      where: {
        id: id,
      },
    });
    let conteudo = modelo?.getDataValue("content");
    variaveis.forEach((varia) => {
      let regex = new RegExp(varia.name, "g");
      conteudo = conteudo.replace(regex, varia.value);
    });

    const modelUpdate = await ModeloModel.update(
      {
        content: conteudo,
      },
      { where: { id } }
    );

    return modelUpdate;
  }
}
