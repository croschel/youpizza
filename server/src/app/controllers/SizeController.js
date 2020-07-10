import Size from '../models/Size';

class SizeController {
  async index(req, res) {
    const size = await Size.findAll();
    return res.json(size);
  }
}

export default new SizeController();
