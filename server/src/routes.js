import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';
import PastaController from './app/controllers/PastaController';
import SizeController from './app/controllers/SizeController';
import BorderController from './app/controllers/BorderController';
import FlavourController from './app/controllers/FlavourController';
import PromotionController from './app/controllers/PromotionController';
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
routes.get('/users/:id', UserController.show);
routes.put('/users', UserController.update);

// Orders Routes
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);

// Pasta Routes
routes.get('/pastas', PastaController.index);
routes.get('/pasta/:id', PastaController.show);
// Border Routes
routes.get('/borders', BorderController.index);
routes.get('/border/:id', BorderController.show);
// Size Routes
routes.get('/sizes', SizeController.index);
routes.get('/size/:id', SizeController.show);
// Flavour Routes
routes.get('/flavours', FlavourController.index);
routes.get('/flavour/:id', FlavourController.show);
// Promo Routes
routes.get('/promotions', PromotionController.index);
routes.get('/promotion', PromotionController.show);

export default routes;
