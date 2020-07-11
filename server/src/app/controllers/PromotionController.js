import Promotion from '../models/Promotion';
import Border from '../models/Border';
import Pasta from '../models/Pasta';
import Size from '../models/Size';
import { formatDay } from '../../util/formatDate';

class PromotionController {
  async index(req, res) {
    const promotions = await Promotion.findAll({
      include: [
        {
          model: Border,
        },
        {
          model: Size,
        },
        {
          model: Pasta,
        },

      ],
    });
    return res.json(promotions);
  }

  async show(req, res) {
    const date = new Date();
    const day = formatDay(date);

    const promotion = await Promotion.findOne({
      where: {
        dia_referencia: day.toLowerCase(),
      },
      include: [
        {
          model: Border,
        },
        {
          model: Size,
        },
        {
          model: Pasta,
        },

      ],
    });

    return res.json(promotion);
  }
}

export default new PromotionController();
