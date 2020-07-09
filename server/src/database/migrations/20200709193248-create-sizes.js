module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sizes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: null,
        primaryKey: true,
      },
      diameter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('sizes');
  },
};
