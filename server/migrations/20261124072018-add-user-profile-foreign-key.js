"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("userProfile", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_user_profile_user_id",
      references: {
        table: "user",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "userProfile",
      "fk_user_profile_user_id",
    );
  },
};
