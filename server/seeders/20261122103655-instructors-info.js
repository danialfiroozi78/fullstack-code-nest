"use strict";

const { instructors } = require("../seed-data/instructor");
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("instructor", instructors);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("instructor", {
      name: instructors.map((item) => item.name),
    });
  },
};
