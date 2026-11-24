import { RoadmapModel } from "../module/roadmap/roadmap.model";
import { RoadmapStepModel } from "../module/roadmapStep/roadmapStep.model";
import { CategoryModel } from "../module/category/category.model";

CategoryModel.hasMany(RoadmapModel, {
  foreignKey: "categoryId",
  as: "category",
});

RoadmapModel.belongsTo(CategoryModel, {
  foreignKey: "categoryId",
  as: "category",
});

RoadmapModel.hasMany(RoadmapStepModel, {
  foreignKey: "roadmapId",
  as: "steps",
});

RoadmapStepModel.belongsTo(RoadmapModel, {
  foreignKey: "roadmapId",
  as: "roadmap",
});
