import Promotion from '../models/Promotion';

class PromotionController {
  async index(req, res) {
    const promotions = await Promotion.findAll();
    return res.json(promotions);
  }
}

export default new PromotionController();
