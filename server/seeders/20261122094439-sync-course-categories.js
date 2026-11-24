"use strict";

const NEW_CATEGORIES = [
  { name: "توسعه وب", slug: "web" },
  { name: "فرانت اند", slug: "frontend" },
  { name: "بک اند", slug: "backend" },
  { name: "طراحی رابط و تجربه کاربری", slug: "ui-ux" },
  { name: "زیرساخت و دواپس", slug: "infrastructure" },
  { name: "توسعه موبایل", slug: "mobile" },
  { name: "هوش مصنوعی", slug: "ai" },
  { name: "علم داده", slug: "data-science" },
  { name: "امنیت سایبری", slug: "cybersecurity" },
  { name: "دیتابیس", slug: "database" },
  { name: "توسعه بازی", slug: "game-development" },
  { name: "بلاکچین", slug: "blockchain" },
  { name: "ابزارهای توسعه", slug: "tools" },
];

const OLD_CATEGORIES = [
  { name: "توسعه وب", slug: "web" },
  { name: "زیرساخت و دواپس", slug: "infrastructure" },
  { name: "توسعه موبایل", slug: "mobile" },
  { name: "هوش مصنوعی", slug: "ai" },
  { name: "علم داده", slug: "data-science" },
  { name: "امنیت سایبری", slug: "cybersecurity" },
  { name: "پایگاه داده", slug: "database" },
  { name: "توسعه بازی", slug: "game-development" },
  { name: "طراحی رابط و تجربه کاربری", slug: "ui-ux" },
  { name: "زبان‌های برنامه‌نویسی", slug: "programming" },
  { name: "معماری نرم‌افزار", slug: "software-architecture" },
  { name: "تست نرم‌افزار", slug: "testing" },
  { name: "بلاکچین", slug: "blockchain" },
  { name: "علوم کامپیوتر", slug: "computer-science" },
  { name: "ابزارهای توسعه", slug: "developer-tools" },
];

const REMOVED_SLUGS = [
  "programming",
  "software-architecture",
  "testing",
  "computer-science",
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // 1. Update existing categories
      await queryInterface.bulkUpdate(
        "category",
        { name: "دیتابیس" },
        { slug: "database" },
        { transaction },
      );

      await queryInterface.bulkUpdate(
        "category",
        { slug: "tools" },
        { slug: "developer-tools" },
        { transaction },
      );

      // 2. Insert new categories
      const existing = await queryInterface.sequelize.query(
        `SELECT slug FROM "category"`,
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      const existingSlugs = new Set(existing.map((category) => category.slug));

      const toInsert = NEW_CATEGORIES.filter(
        (category) => !existingSlugs.has(category.slug),
      );

      if (toInsert.length > 0) {
        await queryInterface.bulkInsert("category", toInsert, {
          transaction,
        });
      }

      // 3. Delete removed categories
      // PostgreSQL checks foreign-key constraints.
      // If a category is referenced with RESTRICT/NO ACTION,
      // the delete fails and the transaction rolls back.
      await queryInterface.bulkDelete(
        "category",
        {
          slug: {
            [Sequelize.Op.in]: REMOVED_SLUGS,
          },
        },
        { transaction },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // Restore changed categories
      await queryInterface.bulkUpdate(
        "category",
        { name: "پایگاه داده" },
        { slug: "database" },
        { transaction },
      );

      await queryInterface.bulkUpdate(
        "category",
        { slug: "developer-tools" },
        { slug: "tools" },
        { transaction },
      );

      // Remove newly added categories
      await queryInterface.bulkDelete(
        "category",
        {
          slug: {
            [Sequelize.Op.in]: ["frontend", "backend"],
          },
        },
        { transaction },
      );

      // Restore removed categories
      const existing = await queryInterface.sequelize.query(
        `SELECT slug FROM "category"`,
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      const existingSlugs = new Set(existing.map((category) => category.slug));

      const toRestore = OLD_CATEGORIES.filter(
        (category) =>
          REMOVED_SLUGS.includes(category.slug) &&
          !existingSlugs.has(category.slug),
      );

      if (toRestore.length > 0) {
        await queryInterface.bulkInsert("category", toRestore, {
          transaction,
        });
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
