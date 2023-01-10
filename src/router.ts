import { Router } from "express";
import modeloRouters from "./modules/Modelos/routes/modelos.routes";
import metadadoRouters from "./modules/Metadados/routes/metadados.routes";
import subCategoryRouters from "./modules/SubCategory/routes/subcategory.routes";
import categoryRouters from "./modules/Category/routes/category.routes";
import tagRouters from "./modules/Tag/routes/tag.routes";
const router: Router = Router();

router.use("/modelos", modeloRouters);
router.use("/metadados", metadadoRouters);
router.use("/tags", tagRouters);
router.use("/categories", categoryRouters);
router.use("/sub-categories", subCategoryRouters);

export { router };
