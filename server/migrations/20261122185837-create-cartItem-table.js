"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cartItem", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cart",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "course",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
    await queryInterface.addConstraint("cartItem", {
      fields: ["cartId", "courseId"],
      type: "unique",
      name: "cart_item_cart_course_unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cartItem");
    await queryInterface.removeConstraint(
      "cartItem",
      "cart_item_cart_course_unique",
    );
  },
};
