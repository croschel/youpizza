import Sequelize, { Model } from 'sequelize';

class Border extends Model {
  static init(sequelize) {
    super.init(
      {
        size: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Border;
