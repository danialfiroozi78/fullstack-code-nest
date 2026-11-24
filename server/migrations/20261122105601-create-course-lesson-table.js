"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courseLesson", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "courseSection",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      videoUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      isFree: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courseLesson");
  },
};
