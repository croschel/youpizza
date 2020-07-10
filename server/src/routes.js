import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';
import PastaController from './app/controllers/PastaController';
import SizeController from './app/controllers/SizeController';
import BorderController from './app/controllers/BorderController';
import FlavourController from './app/controllers/FlavourController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// SignIn
routes.post('/session', SessionController.store);
// SingUp
routes.post('/users', UserController.store);

// Are you Authenticated?
routes.use(authMiddleware);
// So you can use this routes

// Users Routes
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);

// Orders Routes
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);

// Pasta Routes
routes.get('/pasta', PastaController.index);
// Border Routes
routes.get('/border', BorderController.index);
// Size Routes
routes.get('/size', SizeController.index);
// Flavour Routes
routes.get('/flavour', FlavourController.index);

export default routes;
