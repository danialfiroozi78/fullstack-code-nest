"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        phoneNumber: {
          type: Sequelize.STRING(11),
          allowNull: false,
          unique: true,
        },
        role: {
          type: Sequelize.ENUM("student", "instructor", "admin"),
          allowNull: false,
          defaultValue: "student",
        },
        isActive: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        joinedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        tableName: "user",
        timestamps: false,
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable("user");
  },
};
