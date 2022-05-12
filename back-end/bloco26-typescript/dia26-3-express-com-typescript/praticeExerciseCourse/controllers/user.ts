import { Response, Request, NextFunction } from 'express';
import UserService from '../services/user';

export default class UserController {
  public service = new UserService();

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const allUsers = await this.service.getAll();
    return res.status(200).json(allUsers);
  }

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const userById = await this.service.getById(id);

    if(!userById) {
      return res.status(404).json({ message: 'User not found!'});
    }
    return res.status(200).json(userById);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.service.create(user);
    res.status(200).json(userCreated);
  };
}