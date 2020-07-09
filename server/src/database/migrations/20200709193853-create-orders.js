module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: null,
        primaryKey: true,
      },
      promotion: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      half_pizza: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      flavour_id: {
        type: Sequelize.INTEGER,
        references: { model: 'flavour', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      border_id: {
        type: Sequelize.INTEGER,
        references: { model: 'border', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: { model: 'size', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      pasta_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pastas', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pastas', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orders');
  },
};
