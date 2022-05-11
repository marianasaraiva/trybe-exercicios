import { Router } from 'express';
import UserController from '../controllers/user';

const route = Router();

const controller = new UserController();

route.get('/', controller.getAll);
route.post('/', controller.create);

export default route;