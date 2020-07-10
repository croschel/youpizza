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
}

export default Promotion;
