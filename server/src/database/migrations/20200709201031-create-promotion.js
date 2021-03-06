module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('promotions', {
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
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dia_referencia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      border_id: {
        type: Sequelize.INTEGER,
        references: { model: 'borders', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: { model: 'sizes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      pasta_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pasta', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('promotions');
  },
};
