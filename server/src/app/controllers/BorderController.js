import Border from '../models/Border';

class BorderController {
  async index(req, res) {
    const border = await Border.findAll();
    return res.json(border);
  }

  async show(req, res) {
    const { id } = req.params;

    const border = await Border.findByPk(id);
    return res.json(border);
  }
}

export default new BorderController();
