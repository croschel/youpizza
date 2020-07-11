import Sequelize, { Model } from 'sequelize';

class Promotion extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        dia_referencia: Sequelize.STRING,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Border, { foreignKey: 'border_id' });
    this.belongsTo(models.Pasta, { foreignKey: 'pasta_id' });
    this.belongsTo(models.Size, { foreignKey: 'size_id' });
  }
}

export default Promotion;
