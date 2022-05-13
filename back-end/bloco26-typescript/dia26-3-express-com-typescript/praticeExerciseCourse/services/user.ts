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

  public update = async (id: number, user: IUser): Promise<void> => {
    const userById = await this.model.getById(id);

    // if (!userById) {
    //   throw new Error;
    // }

    await this.model.update(id, user);
  }

  public deleteById = async (id: number): Promise<void> => {
    const UserId = await this.model.getById(id);
    // if (!UserId) {
    //   throw new Error;
    // }
    await this.model.deleteById(id);
  }
}