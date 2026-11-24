"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userCourse", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "order",
          key: "id",
        },
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "course",
          key: "id",
        },
      },
    });
    await queryInterface.addConstraint("userCourse", {
      fields: ["userId", "courseId"],
      type: "unique",
      name: "unique_user_course",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userCourse");
  },
};
