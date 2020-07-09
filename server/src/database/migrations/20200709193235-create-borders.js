module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('borders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: null,
        primaryKey: true,
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('borders');
  },
};
