import Border from '../models/Border';

class BorderController {
  async index(req, res) {
    const border = await Border.findAll();
    return res.json(border);
  }
}

export default new BorderController();
