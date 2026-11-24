"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("course", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      slug: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "category",
          key: "id",
        },
      },
      instructorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "instructor",
          key: "id",
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activeDiscount: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      lessons: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
        defaultValue: 0,
      },
      students: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      level: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      thumbnailImage: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      publishedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("course");
  },
};
