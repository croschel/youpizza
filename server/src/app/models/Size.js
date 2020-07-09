import Sequelize, { Model } from 'sequelize';

class Size extends Model {
  static init(sequelize) {
    super.init(
      {
        diameter: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Size;
