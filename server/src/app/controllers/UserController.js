import * as yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      endereco: yup.string().required(),
      points: yup.number(),
      password: yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation Error' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) { // verify if exists an user with this email on DB
      return res.status(400).json({ message: 'User already exists!' });
    }

    const {
      id, name, email, endereco, points,
    } = await User.create(req.body);
    return res.json({
      id, name, email, endereco, points,
    });
  }

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      endereco: yup.string(),
      points: yup.number(),
      password: yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation Error' });
    }

    const userLogged = await User.findByPk(req.userId);

    if (userLogged.email !== req.body.email) {
      const userExists = await User.findOne({ where: { email: req.body.email } });

      if (userExists) { // verify if exists an user with this email on DB
        return res.status(400).json({ message: 'User already exists!' });
      }
    }

    const {
      id, name, email, endereco, points,
    } = await User.update(req.body);
    return res.json({
      id, name, email, endereco, points,
    });
  }
}

export default new UserController();
