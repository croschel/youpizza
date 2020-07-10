import Order from '../models/Order';
import User from '../models/User';
import Border from '../models/Border';
import Flavour from '../models/Flavour';
import Pasta from '../models/Pasta';
import Size from '../models/Size';
import Promotion from '../models/Promotion';
import { formatDay } from '../../util/formatDate';

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

      // update points on logged user
      await userLogged.update({ points: userLogged.points + 10 });
      console.log('Você ganhou dez pontos');

      const date = new Date();
      const day = formatDay(date);

      const promotion = await Promotion.findOne({
        where: {
          dia_referencia: day.toLowerCase(),
        },
      });

      const ordered = await Order.create({
        promotion: order.promotion,
        half_pizza: false,
        total_price: promotion.price,
        flavour_id: promotion.id,
        border_id: 1,
        size_id: 2,
        pasta_id: 1,
        user_id: req.userId,
      });
      return res.json(ordered);
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
