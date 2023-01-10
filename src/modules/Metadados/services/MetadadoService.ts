import { MetadadoModel } from "../model/MetadadoModel";
import AppError from "../../../errors/AppError";

interface IRequest {
  name: string;
  type: string;
  required: boolean;
}

interface IResponse {}

export default class MetadadoService {
  public async create({
    name,
    type,
    required,
  }: IRequest): Promise<MetadadoModel> {
    const metadadoModel = MetadadoModel;
    const modelExist = await metadadoModel.findByName(name);
    if (modelExist) {
      throw new AppError(
        `Metadado ja existe com esse nome. id=${modelExist.getDataValue("id")}`
      );
    }

    const metadado = await metadadoModel.create({
      name,
      type,
      required,
    });

    return metadado;
  }

  public async index(): Promise<MetadadoModel[]> {
    const metadadoModel = MetadadoModel;
    const metadados = await metadadoModel.findAll();
    return metadados;
  }
}
