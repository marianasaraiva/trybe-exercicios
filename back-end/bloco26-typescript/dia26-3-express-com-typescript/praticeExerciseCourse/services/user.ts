import UserModel from '../models/user';
import IUser from '../interfaces/user';

export default class UserService {
  // instancia de uma classe
  public model = new UserModel();

  public getAll = async (): Promise <IUser[]> => {
    const allUsers = await this.model.getAll();
    return allUsers;
  }

  public getById = async (id: number):Promise<IUser> => {
    const userById = await this.model.getById(id);
    return userById;
  }

  public create = async (user: IUser): Promise<IUser> => {
    const createUser = await this.model.create(user);
    return createUser;
  }
}