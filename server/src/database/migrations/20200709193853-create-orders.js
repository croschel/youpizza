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
      },
      half_pizza: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      flavour_id: {
        type: Sequelize.INTEGER,
        references: { model: 'flavours', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      border_id: {
        type: Sequelize.INTEGER,
        references: { model: 'borders', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: { model: 'sizes', key: 'id' },
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
        references: { model: 'users', key: 'id' },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('orders');
  },
};
