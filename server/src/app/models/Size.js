import Sequelize, { Model } from 'sequelize';

class Size extends Model {
  static init(sequelize) {
    super.init(
      {
        diameter: Sequelize.STRING,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Size;
