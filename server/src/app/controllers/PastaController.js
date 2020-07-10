import Pasta from '../models/Pasta';

class PastaController {
  async index(req, res) {
    const pasta = await Pasta.findAll();
    return res.json(pasta);
  }
}

export default new PastaController();
