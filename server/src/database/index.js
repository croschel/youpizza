import Sequelize from 'sequelize';

import User from '../app/models/User';
import Border from '../app/models/Border';
import Flavour from '../app/models/Flavour';
import Pasta from '../app/models/Pasta';
import Size from '../app/models/Size';
import Promotion from '../app/models/Promotion';
import Order from '../app/models/Order';

import dbConfig from '../configs/database';

const models = [User, Border, Flavour, Pasta, Size, Promotion, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
