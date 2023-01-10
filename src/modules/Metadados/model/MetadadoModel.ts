import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";
interface MetadadoAttribuites {
  id?: number;
  name: string;
  type: string;
  required: boolean;
}
export class MetadadoModel extends Model<MetadadoAttribuites> {
  static async findByName(name: string) {
    const extistName = await this.findOne({
      where: {
        name,
      },
    });
    return extistName;
  }
}
MetadadoModel.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "metadados",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
