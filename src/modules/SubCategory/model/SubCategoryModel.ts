import { subCategoryService } from "./../services/SubCategoryService";
import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";
import CategoryModel from "../../Category/model/CategoryModel";

class SubCategoryModel extends Model {
  static Category: any;
  static async findByName(name: string) {
    const subCategory = await this.findOne({
      where: {
        name,
      },
    });
    return subCategory;
  }
}

SubCategoryModel.init(
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
    modelName: "sub_categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default SubCategoryModel;
