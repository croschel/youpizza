import Sequelize, { Model } from 'sequelize';

class Pasta extends Model {
  static init(sequelize) {
    super.init(
      {
        thickness: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Pasta;
