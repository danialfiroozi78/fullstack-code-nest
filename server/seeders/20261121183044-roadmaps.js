"use strict";

const roadmaps = require("../seed-data/roadmap");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // 1. Get categories
      const categories = await queryInterface.sequelize.query(
        'SELECT id, slug FROM "category"',
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      // 2. Prepare roadmaps
      const roadmapData = roadmaps.map((roadmap) => {
        const { category, steps, ...data } = roadmap;

        const categoryItem = categories.find((item) => item.slug === category);

        if (!categoryItem) {
          throw new Error(`Category not found: ${category}`);
        }

        return {
          ...data,
          categoryId: categoryItem.id,
        };
      });

      // 3. Insert roadmaps
      await queryInterface.bulkInsert("roadmap", roadmapData, {
        transaction,
      });

      // 4. Get inserted roadmaps
      const insertedRoadmaps = await queryInterface.sequelize.query(
        'SELECT id, slug FROM "roadmap"',
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      // 5. Prepare roadmap steps
      const stepsData = roadmaps.flatMap((roadmap) => {
        const roadmapItem = insertedRoadmaps.find(
          (item) => item.slug === roadmap.slug,
        );

        return roadmap.steps.map((step, index) => ({
          ...step,
          roadmapId: roadmapItem.id,
          position: index + 1,
        }));
      });

      // 6. Insert roadmap steps
      await queryInterface.bulkInsert("roadmapStep", stepsData, {
        transaction,
      });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const slugs = roadmaps.map((roadmap) => roadmap.slug);

      const insertedRoadmaps = await queryInterface.sequelize.query(
        'SELECT id FROM "roadmap" WHERE slug IN (:slugs)',
        {
          replacements: { slugs },
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      await queryInterface.bulkDelete(
        "roadmapStep",
        {
          roadmapId: {
            [Sequelize.Op.in]: insertedRoadmaps.map((roadmap) => roadmap.id),
          },
        },
        { transaction },
      );

      await queryInterface.bulkDelete(
        "roadmap",
        {
          slug: {
            [Sequelize.Op.in]: slugs,
          },
        },
        { transaction },
      );
    });
  },
};
