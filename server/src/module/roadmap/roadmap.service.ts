import { RoadmapModel } from "./roadmap.model";
import { CategoryModel } from "../category/category.model";
import { RoadmapStepModel } from "../roadmapStep/roadmapStep.model";

export const getRoadmapsService = async () => {
  const roadmaps = await RoadmapModel.findAll({
    include: [
      {
        model: CategoryModel,
        as: "category",
      },
      {
        association: "steps",
      },
    ],
    attributes: {
      exclude: ["categoryId"],
    },
  });

  return roadmaps.map((roadmap) => {
    const data = roadmap.get({ plain: true });

    return {
      ...data,
      stepsCount: data.steps.length,
    };
  });
};

export const getRoadmapStepsService = async (slug: string) => {
  return await RoadmapModel.findOne({
    where: { slug },
    include: [
      {
        model: RoadmapStepModel,
        as: "steps",
        attributes: {
          exclude: ["roadmapId"],
        },
      },
      {
        model: CategoryModel,
        as: "category",
      },
    ],
    attributes: {
      exclude: ["categoryId"],
    },
  });
};
