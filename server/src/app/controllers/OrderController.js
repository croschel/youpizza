import Order from '../models/Order';
import User from '../models/User';
import Border from '../models/Border';
import Flavour from '../models/Flavour';
import Pasta from '../models/Pasta';
import Size from '../models/Size';

class OrderController {
  async store(req, res) {
    const order = req.body;

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
    /* if (order.half_pizza === true) {
      const ordered = await Order.create({
        promotion: order.promotion,
        half_pizza: order.half_pizza,
        flavour_id: order.flavour_id,
        border_id: order.border_id,
        size_id: order.size_id,
        pasta_id: order.pasta_id,
        user_id: order.user_id,
      }); */

    console.log(order);
    const ordered = await Order.create(
      {
        promotion: order.promotion,
        half_pizza: false,
        flavour_id: order.flavour_id,
        border_id: order.border_id,
        size_id: order.size_id,
        pasta_id: order.pasta_id,
        user_id: req.userId,
      },
    );
    console.log(ordered);
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
