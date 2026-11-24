"use strict";

const { courseSectionData } = require("../seed-data/courseSection");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("courseSection", courseSectionData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courseSection", {
      title: courseSectionData.map((item) => item.title),
    });
  },
};
