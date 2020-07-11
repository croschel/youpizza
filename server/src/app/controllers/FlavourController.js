import Flavour from '../models/Flavour';

class FlavourController {
  async index(req, res) {
    const flavour = await Flavour.findAll();
    return res.json(flavour);
  }

  async show(req, res) {
    const { id } = req.params;

    const flavour = await Flavour.findByPk(id);
    return res.json(flavour);
  }
}

export default new FlavourController();
