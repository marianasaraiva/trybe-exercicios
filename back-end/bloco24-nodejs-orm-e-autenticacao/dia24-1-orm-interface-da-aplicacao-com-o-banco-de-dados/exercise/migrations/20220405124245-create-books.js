'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bookTable = queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

    return bookTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Books");
  },
};
