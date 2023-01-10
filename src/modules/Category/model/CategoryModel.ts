import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";
import ModeloModel from "../../Modelos/model/ModeloModel";
import SubCategoryModel from "../../SubCategory/model/SubCategoryModel";

class CategoryModel extends Model {
  static async findByName(name: string) {
    const category = await this.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

CategoryModel.init(
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
    modelName: "categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

SubCategoryModel.belongsTo(CategoryModel, {
  constraints: true,
  foreignKey: "category_id",
});

CategoryModel.hasMany(SubCategoryModel, {
  constraints: true,
  foreignKey: "category_id",
});

export default CategoryModel;
