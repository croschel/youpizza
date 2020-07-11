import Pasta from '../models/Pasta';

class PastaController {
  async index(req, res) {
    const pasta = await Pasta.findAll();
    return res.json(pasta);
  }

  async show(req, res) {
    const { id } = req.params;

    const border = await Pasta.findByPk(id);
    return res.json(border);
  }
}

export default new PastaController();
