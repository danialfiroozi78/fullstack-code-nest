"use strict";

const { courseLessons } = require("../seed-data/courseLesson");
module.exports = {
  async up(queryInterface) {
    const formattedLessons = courseLessons.map(
      ({ courseId, sectionPosition, ...lesson }) => ({
        ...lesson,
        sectionId: (courseId - 1) * 5 + sectionPosition,
      }),
    );

    await queryInterface.bulkInsert("courseLesson", formattedLessons);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("courseLesson", null, {});
  },
};
