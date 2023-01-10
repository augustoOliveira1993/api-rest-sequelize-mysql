import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";
interface TypeMetadadoAttribuites {
  id?: number;
  name: string;
}
export class TypeMetadadoModel extends Model<TypeMetadadoAttribuites> {
  static async findByName(name: string) {
    const extistName = await this.findOne({
      where: {
        name,
      },
    });
    return extistName;
  }
}
TypeMetadadoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "typeMetadado",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
