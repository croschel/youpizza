import Size from '../models/Size';

class SizeController {
  async index(req, res) {
    const size = await Size.findAll();
    return res.json(size);
  }

  async show(req, res) {
    const { id } = req.params;

    const border = await Size.findByPk(id);
    return res.json(border);
  }
}

export default new SizeController();
