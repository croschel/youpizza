module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pastas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: null,
        primaryKey: true,
      },
      thickness: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('pastas');
  },
};
