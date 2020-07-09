import Sequelize, { Model } from 'sequelize';

class Flavour extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Flavour;
