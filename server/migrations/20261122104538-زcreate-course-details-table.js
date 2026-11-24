"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("coursesDetail", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "course",
          key: "id",
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      requirements: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      learningOutcomes: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: [],
      },
      targetAudience: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: [],
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("coursesDetail");
  },
};
