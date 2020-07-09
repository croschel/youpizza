module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flavours', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: null,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('flavours');
  },
};
