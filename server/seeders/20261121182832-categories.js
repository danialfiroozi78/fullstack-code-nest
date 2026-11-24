"use strict";

const categories = [
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

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("category", categories);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", {
      slug: {
        [Sequelize.Op.in]: categories.map((category) => category.slug),
      },
    });
  },
};
