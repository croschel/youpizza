import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        promotion: Sequelize.BOOLEAN,
        half_pizza: Sequelize.BOOLEAN,
        total_price: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Border, { foreignKey: 'border_id' });
    this.belongsTo(models.Flavour, { foreignKey: 'flavour_id' });
    this.belongsTo(models.Pasta, { foreignKey: 'pasta_id' });
    this.belongsTo(models.Size, { foreignKey: 'size_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Order;
