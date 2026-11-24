"use strict";

const { courses } = require("../seed-data/course");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("course", courses);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course", {
      title: courses.map((item) => item.title),
    });
  },
};
