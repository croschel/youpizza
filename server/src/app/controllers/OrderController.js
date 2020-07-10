import Order from '../models/Order';
import User from '../models/User';
import Border from '../models/Border';
import Flavour from '../models/Flavour';
import Pasta from '../models/Pasta';
import Size from '../models/Size';
import Promotion from '../models/Promotion';

class OrderController {
  async store(req, res) {
    const order = req.body;

    // find all prices
    const flavour = await Flavour.findByPk(order.flavour_id);
    const border = await Border.findByPk(order.border_id);
    const size = await Size.findByPk(order.size_id);
    const pasta = await Pasta.findByPk(order.pasta_id);

    if (order.promotion === true) {
      const userLogged = await User.findOne({
        where: {
          id: req.userId,
        },
      });
      const userPointsUpdated = await userLogged.update({ points: userLogged.points + 10 });
      console.log('Você ganhou dez pontos');

      const data = new Date();
      // if()

      const ordered = await Order.create({
        promotion: order.promotion,
        half_pizza: false,
        flavour_id: 1,
        border_id: 2,
        size_id: order.size_id,
        pasta_id: order.pasta_id,
        user_id: req.userId,
      });
      return res.json(userPointsUpdated);
    }

    const ordered = await Order.create(
      {
        promotion: order.promotion,
        half_pizza: false,
        total_price: flavour.price + border.price + size.price + pasta.price,
        flavour_id: order.flavour_id,
        border_id: order.border_id,
        size_id: order.size_id,
        pasta_id: order.pasta_id,
        user_id: req.userId,
      },
    );

    return res.json(ordered);
  }

  async index(req, res) {
    const orders = await Order.findAll({
      include: [
        {
          model: Border,
        },
        {
          model: Flavour,
        },
        {
          model: Size,
        },
        {
          model: User,
        },
        {
          model: Pasta,
        },

      ],
    });
    return res.json(orders);
  }
}

export default new OrderController();
