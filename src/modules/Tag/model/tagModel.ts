import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";

class TagModel extends Model {
  static async findByName(name: string) {
    const category = await this.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

TagModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "tags",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default TagModel;
