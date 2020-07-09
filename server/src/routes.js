import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

export default routes;
