"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderItem", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discountAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      finalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
    await queryInterface.addConstraint("orderItem", {
      fields: ["orderId", "courseId"],
      type: "unique",
      name: "unique_order_course",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orderItem");
  },
};
