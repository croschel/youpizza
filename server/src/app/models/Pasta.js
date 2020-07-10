import Sequelize, { Model } from 'sequelize';

class Pasta extends Model {
  static init(sequelize) {
    super.init(
      {
        thickness: Sequelize.STRING,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Pasta;
