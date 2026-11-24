"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameTable("roadmap_step", "roadmapStep");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameTable("roadmapStep", "roadmap_step");
  },
};
