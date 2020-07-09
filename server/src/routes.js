import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
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

export default routes;
