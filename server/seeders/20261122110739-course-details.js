"use strict";

const { courseDetailData } = require("../seed-data/courseDetail");

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = courseDetailData.map((item) => ({
      ...item,
      learningOutcomes: JSON.stringify(item.learningOutcomes),
      targetAudience: JSON.stringify(item.targetAudience),
    }));

    await queryInterface.bulkInsert("coursesDetail", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("coursesDetail", {
      courseId: courseDetailData.map((item) => item.courseId),
    });
  },
};
