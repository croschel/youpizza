import Flavour from '../models/Flavour';

class FlavourController {
  async index(req, res) {
    const flavour = await Flavour.findAll();
    return res.json(flavour);
  }
}

export default new FlavourController();
