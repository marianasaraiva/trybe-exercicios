import { Router } from 'express';
import UserController from '../controllers/user';

const route = Router();

const user = new UserController();

route.get('/', user.getAll);
route.post('/', user.create);
route.get('/:id', user.getById);
route.put('/:id', user.update);
route.delete('/:id', user.deleteById);

export default route;