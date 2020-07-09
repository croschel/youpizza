/* eslint-disable strict */
// eslint-disable-next-line strict
// eslint-disable-next-line lines-around-directive
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: null,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    hash_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
