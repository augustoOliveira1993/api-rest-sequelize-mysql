import { DataTypes, Model } from "sequelize";
import { db } from "../../../database/db";
import CategoryModel from "../../Category/model/CategoryModel";
import SubCategoryModel from "../../SubCategory/model/SubCategoryModel";
interface ModeloAttribuites {
  id?: number;
  title: string;
  content: string;
  name: string;
  description: string;
}
class ModeloModel extends Model {
  static async findByTitle(title: string) {
    const extist = await this.findOne({
      where: {
        title,
      },
    });
    return extist;
  }
}
ModeloModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "modelos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

CategoryModel.hasOne(ModeloModel, {
  foreignKey: "category_id",
  constraints: true,
});

ModeloModel.belongsTo(CategoryModel, {
  foreignKey: "category_id",
  constraints: true,
});

SubCategoryModel.hasOne(ModeloModel, {
  foreignKey: "sub_category_id",
  constraints: true,
});

ModeloModel.belongsTo(SubCategoryModel, {
  foreignKey: "sub_category_id",
  constraints: true,
});

export default ModeloModel;
