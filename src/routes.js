import { Router } from 'express';

import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store); 
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/authenticated', (req, res) => res.send('Ok'));
routes.get('/clear', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('user');
    res.send('cookies cleared');
})

export default routes;